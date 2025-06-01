// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6HCXAiBYHKpiP7wjB-SVlL58wWxSJUg",
    authDomain: "insight-deck.firebaseapp.com",
    databaseURL: "https://insight-deck-default-rtdb.firebaseio.com", // Add this line
    projectId: "insight-deck",
    storageBucket: "insight-deck.firebasestorage.app",
    messagingSenderId: "504717994160",
    appId: "1:504717994160:web:b8612a7230c631a22c3375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to save a card to Firebase
function saveCardToFirebase(card) {
    const cardRef = ref(database, 'cards/' + card.id);
    set(cardRef, card)
        .then(() => console.log('Card saved successfully!'))
        .catch(error => console.error('Error saving card:', error));
}

// Ensure this file uses named exports for clarity
export { saveCardToFirebase };