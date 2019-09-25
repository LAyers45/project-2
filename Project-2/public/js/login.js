$(document).ready(function () {
  //Variables from page elements
  //-----------------------------
  //console.log("login.js checking in");
  // Login
  var $logEmail = $("#log-email");
  var $logPassword = $("#log-password");
  var $logInButton = $("#logInBttn");
  var $swapToSign = $("#swapToSignup");

  // Signup

  var $signEmail = $("#sign-email");
  var $signPassword = $("#sign-password");
  var $signUsername = $("#sign-username");
  var $signUpButton = $("#signUpBttn");
  var $swapToLog = $("#swapToLogIn");

  // Misc
  //var loggedIn = false;

  //Create the user object to be used in sign up page to save email, password, and username
  var user = {
    saveInfo: function (userInfo) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/Users",
        data: JSON.stringify(userInfo)
      });
    },
    checkLogin: function () {
      return $.ajax({
        url: "api/Users",
        type: "GET"
      });
    }
  };

  var signUpFormSubmit = function (event) {
    event.preventDefault();

    var userInfo = {
      userEmail: $signEmail.val().trim(),
      userPassword: $signPassword.val().trim(),
      username: $signUsername.val().trim()
    };

    if (!(userInfo.userEmail && userInfo.userPassword)) {
      alert("You must enter a valid email and password.");
      return;
    } else {
      user.saveInfo(userInfo).then(function (resp) {
        console.log(resp);
        console.log("User data updated.");
        $("Form").hide();
      });
    }
  };

  var loginFormSubmit = function (event) {
    event.preventDefault();

    console.log($logEmail);

    var loginInfo = {
      userEmail: $logEmail.val().trim(),
      userPassword: $logPassword.val().trim()
    };

    if (!(loginInfo.userEmail && loginInfo.userPassword)) {
      alert("Be surer to enter a valid email and password.");
      return;
    } else {
      user.checkLogin(loginInfo).then(function (resp) {
        console.log(resp);
        console.log("User data has been verified.");
        $("Form").hide();
      });
    }
  };

  /*function logCheck() {
    if (loggedIn === true) {
      $("Form").hide();
    }
  }*/

  function swapToSign() {
    $(".loginForm").hide();
    $(".signInForm").show();
  }

  function swapToLog() {
    $(".loginForm").show();
    $(".signInForm").hide();
  }

  $swapToSign.on("click", swapToSign);
  $swapToLog.on("click", swapToLog);

  $signUpButton.on("click", signUpFormSubmit);
  $logInButton.on("click", loginFormSubmit);
});
