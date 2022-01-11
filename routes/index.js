const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(path.join(__dirname));
    //res.render('index')
    //res.send('index');
});

router.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'));
    //res.send('putos todos');
});



module.exports = router;