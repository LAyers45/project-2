module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
  },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      isUnique: true,
      validate: {
        len: [1]
      }
    },
    user_email: {
      type: DataTypes.STRING,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    user_password: {
      type: DataTypes.STRING,
     allowNull: false,
     validate:{
       len:[5]
     }

    }
  });
  return User;
};
