const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index');
});

router.get('/tratame',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('tratame');
});

router.get('/ubicar',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('ubicar');
});

router.get('/about',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('about');
});

router.get('/servicio',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('servicio');
});

router.get('/personal',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('personal');
});

module.exports = router;
