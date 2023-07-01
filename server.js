const express = require("express");
const serverConfig = require("./configs/serverConfig");

const app = express();

app.listen(serverConfig.Port, () => {
  console.log(`Server Runnig At Port No : ${serverConfig.Port}`);
});
