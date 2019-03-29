import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyAWKn2Ew-WmMiMRtoUtHMnhZT7Aczi3nwM",
    authDomain: "fundo-234204.firebaseapp.com",
    databaseURL: "https://fundo-234204.firebaseio.com",
    projectId: "fundo-234204",
    storageBucket: "fundo-234204.appspot.com",
    messagingSenderId: "1094699433519"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }