 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDmn6tgrNyaGDHk4YypgJ1wLFZBRcA29e8",
    authDomain: "snapgram-3355c.firebaseapp.com",
    projectId: "snapgram-3355c",
    storageBucket: "snapgram-3355c.appspot.com",
    messagingSenderId: "523198523769",
    appId: "1:523198523769:web:6ca5139beaf7683c1ae7a8",
    measurementId: "G-V797X10H24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function login(){
  var email=document.getElementById("email_field").value;
  var password = document.getElementById("password").value;
    
   
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function()  {
    // Signed in
   window.location="Mainpage.html";
    // ...
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(email,password)
    window.alert(errorMessage);
    document.getElementById("status").innerHTML="There was an error🙁.Try Again.";
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
     // User signed in
     var displayName = user.displayName;
     var email = user.email;
     var emailVerified = user.emailVerified;
     var photoURL = user.photoURL;
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
      // ...
  
      console.log(uid);
        localStorage.setItem("User", user.uid);
        var providerData = user.providerData;
        console.log(user);
  
    } else {
      // User is signed out
      // ...
    }
  });
}
function signup(){

    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function()  {
    // Signed in 
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      //Email Sent
      document.getElementById("status").innerHTML="SignUp Successful!! "+ "<a href='index.html'>"+ "Login" + "</a>"
    })
    .catch(function(error)  {
    //An error occured.
    window.alert(error.message);
    document.getElementById("status").innerHTML="There was an error🙁.Try Again.";
    });
  }
  ).catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
  if (errorMessage) {
      window.alert(errorMessage);
      document.getElementById("status").innerHTML="There was an error🙁.Try Again.";

  }

});
    
}
function pwreset(){
  var email = document.getElementById("email_field").value;
  firebase.auth().sendPasswordResetEmail(email)
  .then(function()  {
    // Password reset email sent!
    document.getElementById("status").innerHTML="Email to reset password has been sent to "+  email;
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    document.getElementById("status").innerHTML=errorMessage;

  });

}
 
    





