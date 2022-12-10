const express= require("express");

const app = express();

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));     // with this we can get output in vs terminal key: value format.. 



const userLogin= require ("./chatRoutes/chatLogin");

const userMainpage= require("./chatRoutes/chatMessage");





app.use(userLogin);
app.use(userMainpage);


app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h1>");
});

app.listen(7000);






