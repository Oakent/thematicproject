let express = require("express");
let app = app.js;
let path = require("path");

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,'public'));
});

app.listen(3000);