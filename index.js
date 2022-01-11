const express = require("express");

const app = express();
const port =process.env.PORT || 4000;

app.listen(port);

router.get('/',(req,res)=>{
    res.send("perros locos");
    
});

console.log(`Listen on port ${port}`);
