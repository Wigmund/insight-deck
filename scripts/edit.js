import { saveCardToFirebase, getCardsFromFirebase } from './firebase.js';

let cardsData = [];

function populateGalleries() {
    const fireActionGallery = document.getElementById('fire-action-gallery');
    const waterActionGallery = document.getElementById('water-action-gallery');
    const airActionGallery = document.getElementById('air-action-gallery');
    const earthActionGallery = document.getElementById('earth-action-gallery');
    
    const fireHeroGallery = document.getElementById('fire-hero-gallery');
    const waterHeroGallery = document.getElementById('water-hero-gallery');
    const airHeroGallery = document.getElementById('air-hero-gallery');
    const earthHeroGallery = document.getElementById('earth-hero-gallery');

    const fireArchetypeGallery = document.getElementById('fire-archetype-gallery');
    const waterArchetypeGallery = document.getElementById('water-archetype-gallery');
    const airArchetypeGallery = document.getElementById('air-archetype-gallery');
    const earthArchetypeGallery = document.getElementById('earth-archetype-gallery');

    // Clear existing galleries
    fireActionGallery.innerHTML = '';
    waterActionGallery.innerHTML = '';
    airActionGallery.innerHTML = '';
    earthActionGallery.innerHTML = '';
    fireHeroGallery.innerHTML = '';
    waterHeroGallery.innerHTML = '';
    airHeroGallery.innerHTML = '';
    earthHeroGallery.innerHTML = '';
    fireArchetypeGallery.innerHTML = '';
    waterArchetypeGallery.innerHTML = '';
    airArchetypeGallery.innerHTML = '';
    earthArchetypeGallery.innerHTML = '';

    // Populate galleries with cards
    cardsData.forEach(card => {
        const cardPreview = createCardPreview(card);
        if (card.type === 'action') {
            if (card.suit === 'fire') fireActionGallery.appendChild(cardPreview);
            else if (card.suit === 'water') waterActionGallery.appendChild(cardPreview);
            else if (card.suit === 'air') airActionGallery.appendChild(cardPreview);
            else if (card.suit === 'earth') earthActionGallery.appendChild(cardPreview);
        } else if (card.type === 'hero') {
            if (card.suit === 'fire') fireHeroGallery.appendChild(cardPreview);
            else if (card.suit === 'water') waterHeroGallery.appendChild(cardPreview);
            else if (card.suit === 'air') airHeroGallery.appendChild(cardPreview);
            else if (card.suit === 'earth') earthHeroGallery.appendChild(cardPreview);
        } else if (card.type === 'archetype') {
            if (card.suit === 'fire') fireArchetypeGallery.appendChild(cardPreview);
            else if (card.suit === 'water') waterArchetypeGallery.appendChild(cardPreview);
            else if (card.suit === 'air') airArchetypeGallery.appendChild(cardPreview);
            else if (card.suit === 'earth') earthArchetypeGallery.appendChild(cardPreview);
        }
    });
}

// Function to create a card preview element
function createCardPreview(card) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-preview');
    cardDiv.setAttribute('data-id', card.id);
    cardDiv.setAttribute('data-type', card.type);
    cardDiv.setAttribute('data-suit', card.suit);

    // Add green tick mark if the card is modified
    if (card.isModified) {
        const tickMark = document.createElement('span');
        tickMark.classList.add('tick-mark', 'material-icons');
        tickMark.textContent = 'task_alt';
        cardDiv.appendChild(tickMark);
    }

    // Add suit mark
    const suitMark = document.createElement('span');
    suitMark.classList.add('suit-mark', 'material-icons');
    suitMark.textContent = suitIcons[card.suit];
    cardDiv.appendChild(suitMark);

    // Add number mark
    const numberMark = document.createElement('span');
    numberMark.classList.add('number-mark');
    numberMark.textContent = String(card.number).toUpperCase();
    cardDiv.appendChild(numberMark);

    // Create and append card title
    const titleEl = document.createElement('div');
    titleEl.classList.add('card-title-preview');
    titleEl.textContent = card.title.toUpperCase();
    cardDiv.appendChild(titleEl);

    // Dsiplay card details on click
    cardDiv.addEventListener('click', () => displayCardDetails(card.id));

    return cardDiv;
}

// Function to display card details in modal popup
function displayCardDetails(cardId) {
    const card = cardsData.find(c => c.id === cardId);
    if (!card) return;

    const cardPreview = document.querySelector(`.card-preview[data-id="${cardId}"]`);
    const modal = document.getElementById('cardModal');

    // Fallback for browsers without view-transition support
    modal.setAttribute('data-id', card.id);
    modal.setAttribute('data-type', card.type);
    modal.setAttribute('data-suit', card.suit);
    modalType.textContent = card.type.toUpperCase();
    modalNumber.textContent = card.number.toUpperCase();
    modalSuit.textContent = suitIcons[card.suit];
    modalTitle.textContent = card.title.toUpperCase();
    modalDescription.textContent = card.description || 'not defined';

    let subtitleText = "";
    const tabs = [];
    const tabContents = [];

    if (card.type === "archetype") {
        tabs.push("Strengths", "Shadows");
        tabContents.push(
            `<ul>${card.strengths.map(s => `<li class="editable-field" contenteditable="true" data-field="strengths">${s}</li>`).join('')}</ul>`,
            `<ul>${card.shadows.map(s => `<li class="editable-field" contenteditable="true" data-field="shadows">${s}</li>`).join('')}</ul>`
        );
    } else if (card.type === "action") {
        tabs.push("Underplayed", "Overplayed");
        tabContents.push(
            `<ul>${card.underplayed.map(s => `<li class="editable-field" contenteditable="true" data-field="underplayed">${s}</li>`).join('')}</ul>`,
            `<ul>${card.overplayed.map(s => `<li class="editable-field" contenteditable="true" data-field="overplayed">${s}</li>`).join('')}</ul>`
        );
    } else if (card.type === "hero") {
        tabs.push("How it Helps", "When to Deploy");
        tabContents.push(
            `<ul>${card.howItHelps.map(s => `<li class="editable-field" contenteditable="true" data-field="howItHelps">${s}</li>`).join('')}</ul>`,
            `<ul>${card.whenToDeploy.map(s => `<li class="editable-field" contenteditable="true" data-field="whenToDeploy">${s}</li>`).join('')}</ul>`
        );
    }

    const tabsContainer = modalContent.querySelector('.tabs');
    const tabContentContainer = modalContent.querySelector('.tab-content');

    tabsContainer.innerHTML = '';
    tabContentContainer.innerHTML = '';

    tabs.forEach((tab, index) => {
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab-button');
        tabButton.textContent = tab;
        tabButton.addEventListener('click', () => {
            const isActive = tabButton.classList.contains('active');

            // Deselect all tabs and hide all content
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content-item').forEach(content => content.style.display = 'none');

            // If the clicked tab was not active, activate it and show its content
            if (!isActive) {
                tabButton.classList.add('active');
                tabContentContainer.querySelector(`#tab-content-${index}`).style.display = 'block';
            }
        });
        tabsContainer.appendChild(tabButton);

        const tabContent = document.createElement('div');
        tabContent.id = `tab-content-${index}`;
        tabContent.classList.add('tab-content-item');
        tabContent.style.display = 'none';
        tabContent.innerHTML = tabContents[index];
        tabContentContainer.appendChild(tabContent);
    });

    // Show modal
    modal.style.display = 'block';
}

// Modal Save button functionality
saveButton.onclick = async () => {
    const cardId = modal.getAttribute('data-id'); // Get the card ID from the modal
    const card = cardsData.find(c => c.id === cardId); // Find the card data by ID

    if (card) {
        try {
            let isDirty = false;

            const editableFields = document.querySelectorAll('.editable-field');
            editableFields.forEach(field => {
                const fieldName = field.getAttribute('data-field');
                const newValue = field.textContent.trim();

                if (Array.isArray(card[fieldName])) {
                    const index = Array.from(field.parentNode.children).indexOf(field);
                    if (card[fieldName][index] !== newValue) {
                        card[fieldName][index] = newValue;
                        isDirty = true;
                    }
                } else if (card[fieldName] !== newValue) {
                    card[fieldName] = newValue;
                    isDirty = true;

                    // Update the card preview dynamically if the title changes
                    if (fieldName === 'title') {
                        const cardPreview = document.querySelector(`.card-preview[data-id="${cardId}"] .card-title-preview`);
                        if (cardPreview) {
                            cardPreview.textContent = newValue.toUpperCase();
                        }
                    }
                }
            });

            if (isDirty) {
                card.isModified = true; // Set the isModified flag to true
                await saveCardToFirebase(card);

                // Update the green tick mark dynamically
                const cardPreview = document.querySelector(`.card-preview[data-id="${cardId}"]`);
                if (cardPreview && !cardPreview.querySelector('.tick-mark')) {
                    const tickMark = document.createElement('div');
                    tickMark.classList.add('tick-mark'); // Use the tick-mark class for styling
                    tickMark.textContent = '✔';
                    cardPreview.appendChild(tickMark);
                }
            } else {
                console.log('No changes detected, skipping save.');
            }

            modal.style.display = 'none';
        } catch (error) {
            console.error('Error saving card:', error);
        }
    } else {
        console.error('Card not found.');
    }
}

// Modal close button functionality
closeButton.onclick = () => {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Reset all cards' isModified field to false
const resetButton = document.getElementById('reset-modified-button');
resetButton.addEventListener('click', async () => {
    try {
        cardsData.forEach(card => {
            card.isModified = false;
        });

        // Update Firebase
        await Promise.all(cardsData.map((card) => saveCardToFirebase(card)));

        // Remove green tick marks from all card previews
        document.querySelectorAll('.card-preview .tick-mark').forEach(tickMark => tickMark.remove());

        console.log('All modifications have been reset.');
    } catch (error) {
        console.error('Error resetting modifications:', error);
    }
});

async function loadCards() {
    try {
        cardsData = await getCardsFromFirebase();
        populateGalleries();
    } catch (error) {
        console.error('Error loading cards from Firebase:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    // ...add event listeners for save, reset, etc. as needed...
});
