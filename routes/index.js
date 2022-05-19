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

router.get('/adulto',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('adulto');
});

router.get('/estetico',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('estetico');
});

router.get('/diabetico',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('diabetes');
});

router.get('/enfermera',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('enfermera');
});

router.get('/clr',(req,res)=>{
    //res.sendFile(path.join(__dirname,'views/index.html'));
    res.render('clr');
});

module.exports = router;
