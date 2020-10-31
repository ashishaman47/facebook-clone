import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC0lBWUhAQ6owRT81v90bUasTfXVlvHL8s',
  authDomain: 'facebook-clone-f4184.firebaseapp.com',
  databaseURL: 'https://facebook-clone-f4184.firebaseio.com',
  projectId: 'facebook-clone-f4184',
  storageBucket: 'facebook-clone-f4184.appspot.com',
  messagingSenderId: '592926122758',
  appId: '1:592926122758:web:c0d2c096327d4383377487',
  measurementId: 'G-YHKN0B4NWB',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// this tell firebase we want google login service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
