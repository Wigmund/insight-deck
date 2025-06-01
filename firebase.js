// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6HCXAiBYHKpiP7wjB-SVlL58wWxSJUg",
    authDomain: "insight-deck.firebaseapp.com",
    projectId: "insight-deck",
    storageBucket: "insight-deck.firebasestorage.app",
    messagingSenderId: "504717994160",
    appId: "1:504717994160:web:b8612a7230c631a22c3375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save a card to Firestore
async function saveCardToFirebase(card) {
    try {
        const cardRef = doc(db, 'cards', card.id); // Reference to the document
        await setDoc(cardRef, card); // Save the card data
    } catch (error) {
        console.error('Error saving card:', error);
    }
}

// Ensure this file uses named exports for clarity
export { saveCardToFirebase };