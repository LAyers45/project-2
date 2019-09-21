var db = require("../models");

module.exports = function(app) {
  // Get users username
  app.get("/api/Users", function(req, res) {
    db.User.findOne({
      where: {
        user_email: req.params.user_email
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new User
  app.post("/api/Users", function(req, res) {
    db.User.create({
      username: req.body.username,
      user_email: req.body.user_email,
      user_password: req.body.user_password
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an User by id
  app.delete("/api/Users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
