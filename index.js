const express = require("express");
// const DbConnection = require("./startup/db");
const app = express();
app.use(express.json());

require("./startup/db")();
require("./startup/port")(app);
