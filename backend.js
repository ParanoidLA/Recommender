const http = require('http');
const express =require('express');
const path= require("path"); 
const app=express();
const fs=require('fs');


const hostname = '127.0.0.1';
const port = 3000;
// app.use('/static', express.static('static'))

// app.set('view engine','pug')

// app.set('views',path.join(__dirname,'views')) 

// app.get('/pubg',(req,res)=>{
//     res.status(200).render('pubg',{
//         title:'Hey Harry',message: 'Hello there and thanks for telling me about pug'
//     })
// })
const home=fs.readFileSync('index.html');
const fav=fs.readFileSync('./fav.html');
const insta=fs.readFileSync('./insta.html');
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const login=fs.readFileSync('./login.html');
const signup=fs.readFileSync('./signup.html');


const server = http.createServer((req, res) => {
    url=req.url;
    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/')
    {
        res.end(home);
    }
    else if(url=='/fav')
    {
        res.end(fav);
    }
    else if(url=='/insta')
    {
        res.end(insta);
    }
    else if(url=='/about')
    {
        res.end(about);
    }
    else if(url=='/contact')
    {
        res.end(contact);
    }
    else if(url=='/login')
    {
        res.end(login);
    }
    else if(url=='/signup')
    {
        res.end(signup);
    }
    else
    {
        res.statusCode = 404;
        res.end("<h1> 404 not found</h1>");
    }
  });


server.listen(port,hostname,() => {
    console.log(`Server Running at http://${hostname}:${port}/`);

})

// app.get("/",(req,res)=>{
//     res.status(200).send(home);
// });

// app.listen(port,()=>{
//     console.log(`This application started successfully on port ${port}`);
// });