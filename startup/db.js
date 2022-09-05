const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  mongoose
    .connect(config.get("db"))
    .then(() => console.log("connect to db"))
    .catch(() => console.log("could not connect to db"));
};
