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
            renderCarousel(cardsData); // Ensure carousel uses the theme on load
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
    renderCarousel(cardsData);
});

function renderCarousel(cards) {
    carousel.innerHTML = '';
    cards.forEach((card, idx) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'carousel-card';
        cardDiv.classList.add('suit-' + card.suit);
        cardDiv.setAttribute('data-idx', idx);
        // Add card title
        const cardTitle = document.createElement('span');
        cardTitle.className = 'card-title';
        cardTitle.textContent = card.title;
        cardDiv.appendChild(cardTitle);
        carousel.appendChild(cardDiv);
    });
}

async function loadCards() {
    try {
        cardsData = await getCardsFromFirebase();
        renderCarousel(cardsData);
    } catch (error) {
        console.error('Error loading cards from Firebase:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    loadThemes();
});
