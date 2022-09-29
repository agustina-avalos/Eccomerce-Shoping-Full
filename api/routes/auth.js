const router= require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const { read } = require("fs")
const {PASS_SEC, JWT_SECRET} = process.env
const jwt = require("jsonwebtoken")



//Register

router.post("/register", async (req,res)=>{
    const newUSer = new User({
        username:req.body.username,
        email:req.body.email,
        password: req.body.password,
    })
    

    try{
        const savedUser = await newUSer.save()
        res.status(200).json(savedUser)

    }catch(err){
        res.status(500).json(err)
    }

})


//login


router.post("/login", async(req,res)=>{

    try{

        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong Credentials")
        
        passwordreq = req.body.password
        Originalpassword = user.password

        Originalpassword != passwordreq &&
        res.status(401).json("Wrong Password")

        const accessToken = jwt.sign(
            {
                id:user._id,
                isAdmin : user.isAdmin,
            },
            process.env.JWT_SECRET, 
            {expiresIn:"3d"}
           
        );

        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken})
        

    }catch(err){
        res.status(500)
    }
})


module.exports = router