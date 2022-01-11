const express = require("express");
const app = express();


const port =process.env.PORT || 4000;

app.listen(port);


app.get('/',(req,res)=>{
    res.sendFile('C:/Users/h3mabil/Downloads/nodejs/prueba/views/home.html');
    
});

console.log(`Listen on port ${port}`);
