import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCJ5r7NhuovRs0XDEiCx4f6lolha13K7pg",
  authDomain: "thedojosite-b5493.firebaseapp.com",
  projectId: "thedojosite-b5493",
  storageBucket: "thedojosite-b5493.appspot.com",
  messagingSenderId: "166229810064",
  appId: "1:166229810064:web:67476036f76d707eb9b115"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }