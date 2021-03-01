import firbase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAb_0pyHLFXANXmYHjjWNnQ9OSpIabMx1o",
    authDomain: "order-nham.firebaseapp.com",
    projectId: "order-nham",
    storageBucket: "order-nham.appspot.com",
    messagingSenderId: "421729946563",
    appId: "1:421729946563:web:d988769c26235b11db8b76"
  };

  const fire = firbase.initializeApp(firebaseConfig);

  export default fire;