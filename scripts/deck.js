import { getCardsFromFirebase } from './firebase.js';
import { getThemesFromFirebase } from './firebase.js';

let cardsData = [];
let themesData = [];
let selectedTheme = null;

// Carousel DOM references
const carousel = document.getElementById('deck-carousel');
const themeSelect = document.getElementById('theme-select');

// Dynamically load theme CSS
let currentThemeLink = null;
function loadThemeCss(theme) {
    if (!theme || !theme.url) return;
    if (currentThemeLink) {
        currentThemeLink.remove();
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = theme.url;
    link.id = 'theme-css';
    document.head.appendChild(link);
    currentThemeLink = link;
}

async function loadThemes() {
    try {
        themesData = await getThemesFromFirebase();
        themeSelect.innerHTML = '';
        if (themesData.length === 0) {
            themeSelect.innerHTML = '<option value="">No themes found</option>';
        } else {
            themesData.forEach((theme, idx) => {
                const opt = document.createElement('option');
                opt.value = idx; // Use index for easy lookup
                opt.textContent = theme.name;
                themeSelect.appendChild(opt);
            });
        }
        // Set selectedTheme to the 'plain' theme by default if available, otherwise use the first theme
        if (themesData.length > 0) {
            const plainThemeIndex = themesData.findIndex(theme => theme.name.toLowerCase() === 'plain');
            const defaultIndex = plainThemeIndex !== -1 ? plainThemeIndex : 0;
            selectedTheme = themesData[defaultIndex];
            themeSelect.selectedIndex = defaultIndex;
            loadThemeCss(selectedTheme);
            renderCards(); // Ensure carousel uses the theme on load
        }
    } catch (error) {
        themeSelect.innerHTML = '<option value="">Error loading themes</option>';
        console.error('Error loading themes:', error);
    }
}

themeSelect.addEventListener('change', () => {
    const idx = themeSelect.value;
    selectedTheme = themesData[idx] || null;
    loadThemeCss(selectedTheme);
    renderCards();
});


function renderSwiperCards(cards, type, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = '';
    cards.filter(card => card.type === type).forEach(card => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // Card content
        slide.innerHTML = `
            <div class="card type-${card.type} suit-${card.suit}">
                <div class="card-front">
                    <span class="card-face">FRONT</span>
                    <span class="card-title">${card.title}</span>
                    <span class="card-description">${card.description}</span>
                </div>
                <div class="card-back">
                    <span class="card-face">BACK</span>
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

function renderCards() {
    renderSwiperCards(cardsData, 'action', 'action-swiper-wrapper');
    renderSwiperCards(cardsData, 'hero', 'hero-swiper-wrapper');
    renderSwiperCards(cardsData, 'archetype', 'archetype-swiper-wrapper');
    initSwipers();
    enableCardInteractions(); // Add this line
}

async function loadCards() {
    try {
        cardsData = await getCardsFromFirebase();
    } catch (error) {
        console.error('Error loading cards from Firebase:', error);
    }
}

function initSwipers() {
    // Action Cards Swiper
    new Swiper('.action-swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        mousewheel: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });

    // Hero Cards Swiper
    new Swiper('.hero-swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        mousewheel: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });

    // Archetype Cards Swiper
    new Swiper('.archetype-swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        mousewheel: false,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });
}

function enableCardInteractions() {
    const cards = document.querySelectorAll('.swiper-slide .card');
    const modalOverlay = document.querySelector('.swiper-modal-overlay');
    const modalContent = document.querySelector('#modal-content');

    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            // Get card position before modal opens
            const rect = card.getBoundingClientRect();
            
            modalContent.innerHTML = '';
            const clonedCard = card.cloneNode(true);
            
            // Set initial position to match original card
            clonedCard.style.position = 'fixed';
            clonedCard.style.left = `${rect.left}px`;
            clonedCard.style.top = `${rect.top}px`;
            clonedCard.style.width = `${rect.width}px`;
            clonedCard.style.height = `${rect.height}px`;
            clonedCard.style.transform = 'scale(1)';
            clonedCard.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
            clonedCard.style.zIndex = '1002';
            
            clonedCard.addEventListener('click', (e) => {
                e.stopPropagation();
                clonedCard.classList.toggle('flipped');
            });

            modalContent.appendChild(clonedCard);
            modalOverlay.classList.add('visible');
            
            // Animate to center after a brief delay
            setTimeout(() => {
                const isMobile = window.innerWidth <= 768;
                const targetScale = isMobile ? 1.5 : 2;
                clonedCard.style.left = '50%';
                clonedCard.style.top = '50%';
                clonedCard.style.transform = `translate(-50%, -50%) scale(${targetScale})`;
                clonedCard.style.width = 'auto';
                clonedCard.style.height = 'auto';
            }, 50);
            
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal when clicking outside the card
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('visible');
            document.body.style.overflow = ''; // Re-enable page scrolling
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    loadThemes();
});
