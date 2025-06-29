import { getCardsFromFirebase } from './firebase.js';
import { getThemesFromFirebase } from './firebase.js';

let cardsData = [];
let themesData = [];
let selectedTheme = null;

// Theme select logic (if needed)
// ...existing theme logic can be added here if you want theme switching...

function renderSwiperCards(cards, type, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    wrapper.innerHTML = '';
    cards.filter(card => card.type === type).forEach(card => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // Card content
        slide.innerHTML = `
            <div class="carousel-card suit-${card.suit}">
                <span class="card-title">${card.title}</span>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

async function loadCards() {
    try {
        cardsData = await getCardsFromFirebase();
        renderSwiperCards(cardsData, 'action', 'action-swiper-wrapper');
        renderSwiperCards(cardsData, 'hero', 'hero-swiper-wrapper');
        renderSwiperCards(cardsData, 'archetype', 'archetype-swiper-wrapper');
        initSwipers();
    } catch (error) {
        console.error('Error loading cards from Firebase:', error);
    }
}

function initSwipers() {
    // Action Cards Swiper
    new Swiper('.action-swiper', {
        effect: 'cards',
        grabCursor: true,
        autoplay: { delay: 10000, disableOnInteraction: false },
        mousewheel: true,
        loop: true,
        //cardsEffect: { perSlideOffset: 8, perSlideRotate: 2, slideShadows: true },
    });
    // Hero Cards Swiper
    new Swiper('.hero-swiper', {
        effect: 'cards',
        grabCursor: true,
        autoplay: { delay: 10000, disableOnInteraction: false },
        mousewheel: true,
        loop: true,
        //cardsEffect: { perSlideOffset: 8, perSlideRotate: 2, slideShadows: true },
    });
    // Archetype Cards Swiper
    new Swiper('.archetype-swiper', {
        effect: 'cards',
        grabCursor: true,
        autoplay: { delay: 10000, disableOnInteraction: false },
        mousewheel: true,
        loop: true,
        //cardsEffect: { perSlideOffset: 8, perSlideRotate: 2, slideShadows: true },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
});
