const express = require("express");

const app = express();

app.use("/api", require("./routes/api"));

app.listen(process.env.port || 3000, function(){
  console.log("Houston, we have liftoff");
});
