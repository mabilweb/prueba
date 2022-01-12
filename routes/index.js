const express =require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('index');
});

router.get('/medicamentos',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('medicamentos');
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
