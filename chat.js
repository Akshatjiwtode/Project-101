// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk6UG7YQKKZvJoOP8p5wPMSakOqpcTJqg",
    authDomain: "lets-chat-4e19d.firebaseapp.com",
    projectId: "lets-chat-4e19d",
    storageBucket: "lets-chat-4e19d.appspot.com",
    messagingSenderId: "1000270969711",
    appId: "1:1000270969711:web:05f7cf5acd05f5b2c9869a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



