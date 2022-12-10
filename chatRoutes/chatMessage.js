const express= require("express")

const router= express.Router();

router.get("/login", (req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
    <input id ="username" type="text" name="name" placeholder="username">
    <button type="submit" value="">Login</button>
    </form>`)
})


router.post("/login", (req,res,next)=>{
    // const object=JSON.parse(JSON.stringify(req.body));
    // console.log(object);
    res.redirect("/");
});

module.exports=router;