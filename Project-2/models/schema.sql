DROP DATABASE IF EXISTS userInfo_db;
CREATE DATABASE userInfo_db;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  userEmail VARCHAR(50) NOT NULL,
  userPassword VARCHAR (25) NOT NULL,
  PRIMARY KEY (id)
);
