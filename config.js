import * as fireBase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBB5aWKFKKvsiV8aOGRed4kEcwx8CUOaLM",
    authDomain: "story-hub-5ee2d.firebaseapp.com",
    databaseURL: "https://story-hub-5ee2d.firebaseio.com",
    projectId: "story-hub-5ee2d",
    storageBucket: "story-hub-5ee2d.appspot.com",
    messagingSenderId: "816116500127",
    appId: "1:816116500127:web:6d15a17d21f86e9a9e44aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()