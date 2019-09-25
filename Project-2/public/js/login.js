$( document ).ready(function() {
//Variables from page elements
//-----------------------------
//console.log("login.js checking in");
// Login
var $logEmail = $("log-email-form");
var $logPassword = $("log-password-form");
var $signUpButton = $("#signUpBttn");
var $swapToSign = $("#swapToSignup");

// Signup

var $signEmail = $("sign-email-box");
var $signPassword = $("sign-email-box");
var $signUsername = $("sign-fullname-box");
var $logInButton = $("#logInBttn");
var $swapToLog = $("#swapToLogIn");

// Misc
var $formSwap = $("#formSwap");

//Create the user object to be used in sign up page to save password
var user = {
  saveInfo: function(userInfo) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/userInfo",
      data: JSON.stringify(userInfo)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/userInfo",
      type: "GET"
    });
  }
};


var loginFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    email: $logEmail.val().trim(),
    password: $logPassword.val().trim()
  };

  if (!(user.email && user.password)) {
    alert("You must enter a valid email and password.");
    return;
  }
  loginValidate();

};

function loginValidate(){}


function swapToSign(){
  $(".loginForm").hide();
  $(".signInForm").show();
}

function swapToLog(){
  $(".loginForm").show();
  $(".signInForm").hide();
}

function signUp(){
  
  console.log("Signing you up.")
  $("Form").hide();
};

function logIn(){
  console.log("logging you in.")
  $("Form").hide();
};

$swapToSign.on("click", swapToSign);
$swapToLog.on("click", swapToLog);

$signUpButton.on("click", signUp);
$logInButton.on("click", logIn);


});