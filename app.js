const express=require("express");

const mongoose=require("mongoose");

let isLogin=false;
const ejs=require('ejs');
const app=express();
app.set('view engine','ejs');
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});
const userSchema={
    name:String,
    mail:String,
    password:String,
    number:String
}

const User=new mongoose.model("User",userSchema);


app.get("/",(req,res)=>{
    
    res.render("signup",{error:false,errmsg:"  "});
})

app.get("/about",(req,res)=>{
    if(isLogin){
        res.render("about");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
    
})


app.get("/action",(req,res)=>{
   // res.render("action");
    if(isLogin){
        res.render("action");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})


app.get("/booking",(req,res)=>{
    //res.render("booking");

    if(isLogin){
        res.render("booking");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/coldcase",(req,res)=>{
    //res.render("coldcase");
    if(isLogin){
        res.render("coldcase");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/comedy",(req,res)=>{
    //res.render("comedy");
    if(isLogin){
        res.render("comedy");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/contact",(req,res)=>{
    //res.render("contact");
    if(isLogin){
        res.render("contact");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/coolieno1",(req,res)=>{
   
    if(isLogin){
        res.render("coolieno1");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})





app.get("/haseen",(req,res)=>{
    
    
    if(isLogin){
        res.render("haseen");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
    
})

app.get("/haseendillrubareview",(req,res)=>{
    
    
    if(isLogin){
        res.render("haseendillrubareview");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})


app.get("/hellocharlie",(req,res)=>{
    
    if(isLogin){
        res.render("hellocharlie");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/hungama2",(req,res)=>{
    
    if(isLogin){
        res.render("hungama2");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
    
})

app.get("/hungama2review",(req,res)=>{
    if(isLogin){
        res.render("hungama2review");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/index1",(req,res)=>{
    if(isLogin){
        res.render("index1");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})


app.get("/kabir",(req,res)=>{
    if(isLogin){
        res.render("kabir");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/kabirsinghreview",(req,res)=>{
    
    if(isLogin){
        res.render("kabirsinghreview");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/loveaj",(req,res)=>{
    if(isLogin){
        res.render("loveaj");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/mumbaisaga",(req,res)=>{
    if(isLogin){
        res.render("mumbaisaga");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/paradiso",(req,res)=>{
    if(isLogin){
        res.render("paradiso");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/logout",(req,res)=>{
    isLogin=false;
    res.redirect("/");
})

app.get("/power",(req,res)=>{
    if(isLogin){
        res.render("power");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/rednotice",(req,res)=>{
    if(isLogin){
        res.render("rednotice");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/reviews",(req,res)=>{
    
    if(isLogin){
        res.render("reviews");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})
app.get("/romantic",(req,res)=>{
    if(isLogin){
        res.render("romantic");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})


app.get("/shershah",(req,res)=>{

    
    if(isLogin){
        res.render("shershah");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/shershahreviews",(req,res)=>{
    
    if(isLogin){
        res.render("shershahreviews");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/signin",(req,res)=>{
    res.render("signin",{error:false,errmsg:""});
})

app.get("/team",(req,res)=>{
    
    if(isLogin){
        res.render("team");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/theatre",(req,res)=>{
    
    if(isLogin){
        res.render("theatre");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})

app.get("/thriller",(req,res)=>{
    if(isLogin){
        res.render("thriller");
    }
    else{
        res.render("signup",{error:true,errmsg:"Please Signup/Signin first"})
    }
})


app.post("/signup",(req,res)=>{
    
    console.log(req.body);
  let {name,mail,password,number}=req.body;
  if(name.length < 3){
    res.render("signup",{error:true,errmsg:"name length must be greater than 3 characters"});
    
   }
    else if(mail.length==0){
        console.log("Execute me ");
        res.render("signup",{error:true,errmsg:"email must be present"});
    }
    else if(password.length<8){

        res.render("signup",{error:true,errmsg:"password length must be minimum 8 characters"});

    }
    else if(!number.length){
        res.render("signup",{error:true,errmsg:"mobile number must be 10 digits"});

    }
    else if(!Number(number) || number.length!=10){
        res.render("signup",{error:true,errmsg:"invalid mobile number"});

    
    }
    else{
        User.findOne({mail:mail},(err,isPresent)=>{
            if(err){
                console.log("error");
            }
            else {
                if(isPresent){
                    res.render("signup",{error:true,errmsg:"Email already present"});
                }
                else{

                    const newUser=new User({
                        name:name,
                        mail:mail,
                        password:password,
                        number:number
                    })
                    newUser.save((err)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log("Database saved Successfully ");
                        }
                    })

                    isLogin=true;
            
                    res.redirect("/index1");
                }
            }
        })
       
    }

   
})

app.post("/signin",(req,res)=>{
    console.log(req.body);
    let {mail,password}=req.body;
    if(mail.length==0){
        console.log("Execute me ");
        res.render("signin",{error:true,errmsg:"email must be present"});
    }
    else if(password.length<8){

        res.render("signin",{error:true,errmsg:"password length must be minimum 8 characters"});

    }
    else{
        User.findOne({mail:mail,password:password},(err,isPresent)=>{
            if(err){
                console.log("Signin Error");
            }
            else{
                if(isPresent){
                    isLogin=true;
                    res.redirect("index1");
                }
                else{
                    res.render("signin",{error:true,errmsg:"Please Signin / Data Input was wrong "});
                }
            }
        })
    }

    
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})