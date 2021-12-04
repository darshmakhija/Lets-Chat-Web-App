var firebaseConfig = {
      apiKey: "AIzaSyDXGn4CuJK_hkGlN2sby2J-MfyEFvUzDsY",
  authDomain: "lets-chat-web-app-f6d00.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f6d00-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f6d00",
  storageBucket: "lets-chat-web-app-f6d00.appspot.com",
  messagingSenderId: "12635128913",
  appId: "1:12635128913:web:0a77975254aee529d8e470",
  measurementId: "G-EGV3VX2GJK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

