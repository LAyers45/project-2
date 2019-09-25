$(document).ready(function() {
  //Variables from page elements
  //-----------------------------
  //console.log("login.js checking in");
  // Login
  var $logEmail = $("log-email-form");
  var $logPassword = $("log-password-form");
  var $logInButton = $("logInBttn");
  var $swapToSign = $("#swapToSignup");

  // Signup

  var $signEmail = $("#sign-email");
  var $signPassword = $("#sign-password");
  var $signUsername = $("#sign-username");
  var $signUpButton = $("#signUpBttn");
  var $swapToLog = $("#swapToLogIn");

  // Misc
  var loggedIn = false;

  //Create the user object to be used in sign up page to save email, password, and username
  var user = {
    saveInfo: function(userInfo) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/Users",
        data: JSON.stringify(userInfo)
      });
    },
    getExamples: function() {
      return $.ajax({
        url: "api/Users",
        type: "GET"
      });
    }
  };

  var signUpFormSubmit = function(event) {
    event.preventDefault();

    var userInfo = {
      email: $signEmail.val().trim(),
      password: $signPassword.val().trim(),
      username: $signUsername.val().trim()
    };

    if (!(userInfo.email && userInfo.password)) {
      alert("You must enter a valid email and password.");
      return;
    } else {
      user.saveInfo(userInfo).then(function(resp) {
        console.log(resp);
        console.log("User data updated.");
      });
    }
  };

  function loginValidate() {}

  function logCheck() {
    if (loggedIn === true) {
      $("Form").hide();
    }
  }

  function swapToSign() {
    $(".loginForm").hide();
    $(".signInForm").show();
  }

  function swapToLog() {
    $(".loginForm").show();
    $(".signInForm").hide();
  }

  function signUp(event) {
    event.preventDefault();
    var todo = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/todos", todo, getTodos);
    $newItemInput.val("");
  }

  function logIn() {
    console.log("logging you in.");
    $("Form").hide();
    var loggedIn = true;
    logCheck();
  }

  $swapToSign.on("click", swapToSign);
  $swapToLog.on("click", swapToLog);

  $signUpButton.on("click", signUpFormSubmit);
  $logInButton.on("click", logIn);
});