import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyCpVz0bUQUFjRzhvLp94GREozKOE5yGt08",
        authDomain: "teamvotingapp-80c16.firebaseapp.com",
        projectId: "teamvotingapp-80c16",
        storageBucket: "teamvotingapp-80c16.appspot.com",
        messagingSenderId: "719055393754",
        appId: "1:719055393754:web:c4a3e3380bf9a1b98c26e3"
      };
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();