var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    flash=require('connect-flash'),
    User = require("./models/user");
app = express();

//Connect to DB
mongoose.connect('mongodb://localhost/AuctionShelter');


app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(flash());

//Serve Resources
app.use(express.static("public"));

app.use(require('express-session')({
    secret: 'sadasfdsagrgawrgerw',
    resave: false,
    saveUninitialized: false
}));

app.use((req,res,next)=>{
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//ROUTES

app.get('/', (req, res) => {
    res.redirect('/login');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","Logged Out");
    res.redirect('/login');
});
app.post('/login', passport.authenticate("local", {
    successRedirect: '/create_payments',
    failureRedirect: '/login',
    failureFlash:true
}), (req, res) => {

});
app.get('/signup', (req, res) => {
    res.render("signup");
});
app.post('/signup',(req,res)=>{
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
        if(err){
            return res.render('/signup');
        }
        passport.authenticate("local")(req,res,()=>{
            res.redirect('/create_payments');
        });
    });
});

app.get('/create_payments',isLoggedIn, (req, res) => {
    res.render('create_payments');
});


app.get("*", (req, res) => {
    res.redirect('/login');
});

//MiddleWare
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please Login First!");
    res.redirect('/login');
}


app.listen(process.env.PORT || 5050, () => {
    console.log("Server Started");
});