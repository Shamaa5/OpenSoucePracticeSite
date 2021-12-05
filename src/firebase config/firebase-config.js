import firebase from 'firebase/app';
import auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB4N2RFeerqT6ra65316XQI9Yf_08OKmrM',
  authDomain: 'opensourcepracticesite.firebaseapp.com',
  projectId: 'opensourcepracticesite',
  storageBucket: 'opensourcepracticesite.appspot.com',
  messagingSenderId: '260454999174',
  appId: '1:260454999174:web:324ea411b39bff24b7dd07',
  measurementId: 'G-XMW9FXJDTC',
};
firebase.initializeApp(firebaseConfig);

const githubProvider = new firebase.auth.GithubAuthProvider();

export { auth, githubProvider };
