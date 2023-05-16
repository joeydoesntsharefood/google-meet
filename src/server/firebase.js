import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCU6wkte8Wso2d0ZYkGxk6yhAHajApjBOQ",
  authDomain: "videocall-2883c.firebaseapp.com",
  databaseURL: "https://videocall-2883c-default-rtdb.firebaseio.com",
  projectId: "videocall-2883c",
  storageBucket: "videocall-2883c.appspot.com",
  messagingSenderId: "405155955654",
  appId: "1:405155955654:web:d7c2eb12787d4866c7a8c7",
  measurementId: "G-P818LPGGN8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");
export const userName = urlparams.get("name");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
