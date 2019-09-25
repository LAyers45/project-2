var db = require("../models");

module.exports = function (app) {
  // Get users username
  app.get("/api/Users", function (req, res) {
    db.User.findOne({
      where: {
        userEmail: req.params.userEmail
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new User
  app.post("/api/Users", function (req, res) {
    db.User.create({
      username: req.body.username,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an User by id
  /*
  app.delete("/api/Users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
*/
};
