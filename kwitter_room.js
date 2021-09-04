
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBxPz4fg9Fax7XV3ukGlkzp6U6CRqI7pwQ",
      authDomain: "project-45-9e5e8.firebaseapp.com",
      databaseURL: "https://project-45-9e5e8-default-rtdb.firebaseio.com",
      projectId: "project-45-9e5e8",
      storageBucket: "project-45-9e5e8.appspot.com",
      messagingSenderId: "413838671947",
      appId: "1:413838671947:web:9d3924e530248e945f4dce",
      measurementId: "G-1NSWYXV8WK"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code

      });});}
getData();
