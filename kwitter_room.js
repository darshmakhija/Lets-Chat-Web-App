
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXGn4CuJK_hkGlN2sby2J-MfyEFvUzDsY",
  authDomain: "lets-chat-web-app-f6d00.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f6d00-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f6d00",
  storageBucket: "lets-chat-web-app-f6d00.appspot.com",
  messagingSenderId: "12635128913",
  appId: "1:12635128913:web:0a77975254aee529d8e470",
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
      
      function addRoom()
       {
          room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
            localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
           }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwiitter_page.html";
    }
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    