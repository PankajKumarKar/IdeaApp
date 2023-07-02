const express = require("express");
const serverConfig = require("./configs/serverConfig");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

const app = express();

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error While Db Connection");
});

db.once("open", () => {
  console.log("Db Connected");
});

app.listen(serverConfig.Port, () => {
  console.log(`Server Runnig At Port No : ${serverConfig.Port}`);
});
