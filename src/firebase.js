import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCdQahZea5pcVr5r43GIZgRxaM3UeveLuE",
    authDomain: "flashcard-c18ba.firebaseapp.com",
    databaseURL: "https://flashcard-c18ba.firebaseio.com/",
    projectId: "flashcard-c18ba",
    storageBucket: "gs://flashcard-c18ba.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
var fire = firebase.initializeApp(config);
export default fire;