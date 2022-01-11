const express = require("express");

const app = express();
const port =process.env.PORT || 4000;

app.listen(port);

app.get("/", (req,res)=>{
    res.send("<h1>ladren perros</h1>");
});

console.log(`Listen on port ${port}`);
