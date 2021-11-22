// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1ZYYMfklUWtp-ezR3GyNrqw2aQeYP0V8",
  authDomain: "lets-chat-web-app-darsh.firebaseapp.com",
  projectId: "lets-chat-web-app-darsh",
  storageBucket: "lets-chat-web-app-darsh.appspot.com",
  messagingSenderId: "13961971453",
  appId: "1:13961971453:web:2abba339d434ca63b96094"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
  window.location = "index.html";
}
