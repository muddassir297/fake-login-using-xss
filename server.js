var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    console.log(req.query);
    res.json("Username: "+ req.query.uid+",  "+"Password: "+ req.query.passw);
   });

   app.post("/user", (req, res, next) => {
       console.log(req);
    res.json("Welcome");
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});