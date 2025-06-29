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
        // Set selectedTheme to the first theme by default if available
        if (themesData.length > 0) {
            selectedTheme = themesData[0];
            themeSelect.selectedIndex = 0;
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
                    <span class="card-title">${card.title}</span>
                </div>
                <div class="card-back">
                    <span>BACK</span>
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
        mousewheel: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        }
    });

    // Hero Cards Swiper
    new Swiper('.hero-swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        mousewheel: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        }
    });

    // Archetype Cards Swiper
    new Swiper('.archetype-swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        mousewheel: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    loadThemes();
});
