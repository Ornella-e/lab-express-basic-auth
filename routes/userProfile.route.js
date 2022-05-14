const router = require("express").Router()

router.get("/userProfile", (req, res)=>{
    res.render("userProfile")
})

module.exports=router