import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyC27uCPWKfcKYzeL4Mce1TA61IycuqdRVM",
	authDomain: "choquirestaurantes.firebaseapp.com",
	databaseURL: "https://choquirestaurantes.firebaseio.com",
	projectId: "choquirestaurantes",
	storageBucket: "choquirestaurantes.appspot.com",
	messagingSenderId: "501360693130",
	appId: "1:501360693130:web:ab0c197b8dbf357edf0273",
	measurementId: "G-VN3L6WFNLE"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
