const express = require("express");
const serverConfig = require("./configs/serverConfig");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const userModel = require("./models/user.model");
const bcrypt = require("bcrypt");

const app = express();

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error While Db Connection");
});

db.once("open", () => {
  console.log("Db Connected");
  init();
});

// create Admin
async function init() {
  let admin = await userModel.findOne({ userId: "admin" });

  if (admin) return console.log("Admin user already present");

  admin = await userModel.create({
    name: "Pankaj kar",
    userId: "admin",
    email: "pankaj@gmail.com",
    userType: "ADMIN",
    password: bcrypt.hashSync("123456", 9),
  });
  console.log(admin);
}

app.listen(serverConfig.Port, () => {
  console.log(`Server Runnig At Port No : ${serverConfig.Port}`);
});
