const express =require('express');
const router = express.Router();
const appp =express();
const path =require('path');

appp.set('view engine', 'ejs');


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