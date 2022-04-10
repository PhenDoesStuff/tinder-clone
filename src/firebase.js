import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC25_QpAe7SNeIQpMvzhsuVVDem1SciFTw',
	authDomain: 'tinder-clone-ece25.firebaseapp.com',
	projectId: 'tinder-clone-ece25',
	storageBucket: 'tinder-clone-ece25.appspot.com',
	messagingSenderId: '581699967007',
	appId: '1:581699967007:web:392c674f6bc5e5ce0d1d2a',
	measurementId: 'G-QDLX66QSPJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
