const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRoutes = require("./routes/people");
const InventoryRoutes = require("./routes/inventory");

var app = express();
app.use(bodyParser.json());

app.use("/people", PeopleRoutes);
app.use("/inventory", InventoryRoutes);




app.listen(3000);