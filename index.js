const express =require('express');
const morgan =require('morgan');
const exphbs=require('express-handlebars');
const path =require('path');
const flash=require('connect-flash');
const session =require('express-session');
const MySQLStore=require('express-mysql-session');
const passport = require('passport');

const {database}=require('./keys');
const app=express();
require('./lib/passport');

//settings
app.set('port',process.env.PORT ||4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
defaultLayout:'main',
layoutsDir:path.join(app.get('views'),'layouts'),
partialsDir:path.join(app.get('views'),'partials'),
extname:'.hbs',
helpers:require('./lib/handlebars')
}));
app.set('view engine','.hbs');

//middlewares

//global varials
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret:'faztmysqlnodesession',
    resave:false,
    saveUninitialized:false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use((req,res,next)=>{
    app.locals.success=req.flash('success');
    app.locals.message=req.flash('message');
    app.locals.user = req.user;
    next();
    });
//Routes
app.use(require('./src/routes'));
app.use(require('./routes/autenthication'));
app.use('/links',require('./routes/links'));

//Public
//app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname,'public')));


//statir server
app.listen(app.get('port'),()=>{
    console.log('server on pedro',app.get('port'));
});