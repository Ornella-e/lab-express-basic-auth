const router = require ("express").Router()
const User = require ("../models/User.model")
const bcrypt = require ("bcryptjs")

const signUp = (req, res) => res.render("auth/signup")

router.get("/signup", signUp)

router.post("/signup", async (req, res)=>{
    const { email, password } = req.body
    
    if(!password || !email){
        const errorMsg = `Password or email are not valid`
        res.render("auth/signup",{errorMsg})
        return
    }
    try{
        const findUser= await User.findOne({email})
        if(findUser){
        const errorMsg = `You are already registered`
        res.render("auth/signup",{errorMsg})
        return
        }

    const hashedPass=bcrypt.hashSync(password, 12)
    const createUser= await User.create({
        email,
        password: hashedPass,
    })
    res.redirect("/userProfile")
}catch(e){
    console.log(e)
}

})

module.exports = router