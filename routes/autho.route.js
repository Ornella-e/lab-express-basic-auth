const router = require ("express").Router()
const User = require ("../models/User.model")
const bcrypt = require ("bcryptjs")

const signUp = (req, res) => res.render("auth/signup")

router.get("/signup", signUp)

router.post("/signup", async (req, res)=>{
    const { email, password } = req.body
    
    if(!password || !email){
        
    }
})