const express = require('express');
const app =express();
const path =require('path');



//settings
app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleawres

///

///routes
//app.use(require('./routes/index'));


app.get('/', (req, res) => {
    //console.log(path.join(__dirname , 'views/index.html'));
    //res.sendFile(path.join(__dirname , 'views/index.ejs'));
    res.render(path.join(__dirname , 'views/index.ejs'));
});


///static files
//app.use(express.static(__dirname + '/public'));


///listeig the server
app.listen(app.get('port'), () =>{
    console.log('sirviendo  en :', app.get('port'));
});