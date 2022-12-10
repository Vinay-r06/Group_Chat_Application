const express=require('express');

const router=express.Router();

const fs =require ("fs");

router.get('/', (req,res,next)=>{
fs.readFile("chatInbox.txt", (err, data)=>{

    if (err){
        console.log(err);
        data="No chat! lets start"
    }
res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
                 <input id="message" name="message" type="text" placeholder="message">
                 <input id="username" name="username" type="hidden">
                 <button type="submit">Send</button></form>`
    );
})
})

router.post("/", (req,res,next)=>{
   console.log(`${req.body.username} : ${req.body.message}`);

    fs.writeFile(
        "chatInbox.txt",`${req.body.username} : ${req.body.message}  ` , {flag:'a'} , (err)=>(err? console.log(err) : res.redirect('/'))
    )
})

module.exports=router;