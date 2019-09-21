//Variables from page elements
//-----------------------------
// Login 
var $logEmail = $("log-email-box");
var $logPassword = $("log-password-box");

// Signup
var $signEmail = $("sign-email-box");
var $signPassword = $("sign-email-box");

// Misc
var logIn = true;

//Create the user object to be ussed in sign up page to save password
var user={
    saveEmail: function(userInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "api/emails",
          data: JSON.stringify(userInfo)
        });

      },
      saveEmail: function(userInfo) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "api/emails",
          data: JSON.stringify(userInfo)
        });

    }

}

