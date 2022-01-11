const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("la verga");
    //res.send('index');
});

router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
    //res.send('putos todos');
});



module.exports = router;