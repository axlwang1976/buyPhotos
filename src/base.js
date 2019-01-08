import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBM9hx9o6nYB2UAS98ht9eYHjzoC17qEdA',
  authDomain: 'buy-photos.firebaseapp.com',
  databaseURL: 'https://buy-photos.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
