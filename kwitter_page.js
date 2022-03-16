const firebaseConfig = {
      apiKey: "AIzaSyBEHeIEzcBm2zxd6XJyN3mI4CASVFNVdms",
      authDomain: "kwitter-room-67506.firebaseapp.com",
      databaseURL: "https://kwitter-room-67506-default-rtdb.firebaseio.com",
      projectId: "kwitter-room-67506",
      storageBucket: "kwitter-room-67506.appspot.com",
      messagingSenderId: "114165762001",
      appId: "1:114165762001:web:ea2e1fb5a6452c44f542f0"
    };
    
    
     firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 
function send()
{
      msg=document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
      });

      document.getElementById("msg").Value="";
}