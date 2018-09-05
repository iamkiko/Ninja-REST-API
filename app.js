const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));﻿
app.use(bodyParser.json());

app.use("/api", require("./routes/api"));


app.listen(process.env.port || 3000, function(){
  console.log("Houston, we have liftoff");
});
