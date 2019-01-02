import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId:  process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* 
database.ref("expenses").push({
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 976123498763
})
database.ref("expenses").push({
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 976123498763
})
database.ref("expenses").push( {
  description: 'Credit card',
  note: '',
  amount: 4500,
  createdAt: 976123498763
}) */
 
/* database.ref('expenses').once('value').then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
}) */

/* database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses);
}) */
 /* database.ref('expenses').on('value') */
/*  database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}) */