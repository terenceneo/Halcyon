import firebase from 'firebase'

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "bt3103-halcyon.firebaseapp.com",
	databaseURL: "https://bt3103-halcyon.firebaseio.com",
	projectId: "bt3103-halcyon",
	storageBucket: "bt3103-halcyon.appspot.com",
	messagingSenderId: "431658994046",
	appId: "1:431658994046:web:a1562884e23b61dce60b2f"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;