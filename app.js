const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port =8000;
//EXPRESS SPECIFICS STUFF
app.use('static',express.static('static')); // for serving static files
app.use(express.urlencoded());
// PUG SPECIFICS STUFF
app.set('view engine','pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'views')) // set the view directory
// ENDPOINTS
app.get('/',(req,res)=>{
    const param = {  };
  res.status(200).render('index.pug',param);
});
// START THE SERVIER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});