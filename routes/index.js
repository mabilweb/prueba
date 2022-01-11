const express =require('express');
const router = express.Router();

const path =require('path');


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + 'index.ejs'));
    //res.send('index');
    //res.render('index');
    //console.log("gato barato");
});

//router.get('/about',(req,res)=>{
//    res.sendFile(path.join(__dirname,'views/index.html'));
//    //res.send('putos todos');
//});
//


module.exports = router;