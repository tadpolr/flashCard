import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCdQahZea5pcVr5r43GIZgRxaM3UeveLuE',
  authDomain: 'flashcard-c18ba.firebaseapp.com',
  databaseURL: 'https://flashcard-c18ba.firebaseio.com',
  projectId: 'flashcard-c18ba',
  storageBucket: 'flashcard-c18ba.appspot.com',
  messagingSenderId: '870748163041',
};

// var config = {
//   apiKey: 'AIzaSyCdQahZea5pcVr5r43GIZgRxaM3UeveLuE',
//   authDomain: 'flashcard-c18ba.firebaseapp.com',
//   databaseURL: 'https://flashcard-c18ba.firebaseio.com/',
//   projectId: 'flashcard-c18ba',
//   storageBucket: 'gs://flashcard-c18ba.appspot.com',
//   messagingSenderId: '870748163041',
// };
var fire = firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var firestore = firebase.firestore();

// Disable deprecated features
firestore.settings({
  timestampsInSnapshots: true,
});

var fireAuth = firebase.auth();

export { fire, firestore, fireAuth };
export default fire;
