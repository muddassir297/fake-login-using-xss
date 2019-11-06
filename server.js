var express = require("express");
var app = express();
var UserData =[];
app.get("/", (req, res, next) => {    
    UserData.push(req.query)
    console.log(UserData);
    if (UserData.length >1){
        res.json("Username: "+ UserData[1].uid+",  Password: "+ UserData[1].passw+", Cookie: "+ UserData[0].AltoroAccounts);
    }else{
        res.json("waiting...")
    }
    
   // res.json("hello")
   });

   app.post("/user", (req, res, next) => {
       console.log(req);
    res.json("Welcome");
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});