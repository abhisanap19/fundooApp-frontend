importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyAWKn2Ew-WmMiMRtoUtHMnhZT7Aczi3nwM",
    authDomain: "fundo-234204.firebaseapp.com",
    databaseURL: "https://fundo-234204.firebaseio.com",
    projectId: "fundo-234204",
    storageBucket: "fundo-234204.appspot.com",
    messagingSenderId: "1094699433519"
});

const messaging = firebase.messaging();