const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "RswxRYxa#dWTFODhGKP1yT2oQBFf5x1XHrgQQTOEvvZDG6Y-shEo",
  MONGODB: process.env.MONGODB || "mongodb://mongo:PVDSiqtdMyyKYfJapaTGjHlBGyLqIHJp@shinkansen.proxy.rlwy.net:47484",
  OWNER_NUM: process.env.OWNER_NUM || "9470xxxxxxx",
};
