var firebaseConfig = {
    apiKey:"AIzaSyAk_gg7lHoMJdVlisKbiUd35idJDg-P9s",
    authDomain: "social-e5855.firebaseapp.com",
    databaseURL: "https://social-e5855-default-rtdb.firebaseio.com",
    projectId: "social-e5855",
    storageBucket:"social-e5855.appspot.com",
    messagingSenderId: "671543009162",
    appId: "1:671543009162:web:a881fdddf02bf05c08b273"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function logout()
  {
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location = "index.html"
  }

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }