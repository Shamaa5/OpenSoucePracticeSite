import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ-yOHfX1GdOM_LycfYnqgxko-gqg-rbU',
  authDomain: 'practice-ec78a.firebaseapp.com',
  projectId: 'practice-ec78a',
  storageBucket: 'practice-ec78a.appspot.com',
  messagingSenderId: '388206497516',
  appId: '1:388206497516:web:be29823be222eb6d43dfc9',
  measurementId: 'G-BK7TEKQ3ST',
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export { authentication, signInWithPopup, GithubAuthProvider };
