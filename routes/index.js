const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //res.send('index');
    //console.log("gato barato");
});

//router.get('/about',(req,res)=>{
//    res.sendFile(path.join(__dirname,'views/index.html'));
//    //res.send('putos todos');
//});
//


module.exports = router;