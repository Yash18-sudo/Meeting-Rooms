const firebaseConfig = {
  apiKey: "AIzaSyDe-KGdR_z_RX_YZ3JaTuUb8QnbKurcd_E",
  authDomain: "auth-boss.firebaseapp.com",
  projectId: "auth-boss",
  storageBucket: "auth-boss.appspot.com",
  messagingSenderId: "415231593338",
  appId: "1:415231593338:web:f1437a5a94f0e869f8e4c3",
  measurementId: "G-CE77VC32BE"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };
