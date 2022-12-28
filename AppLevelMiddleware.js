const express = require('express');
const app = express();
const path = require('path');

const filepath = path.join(__dirname, 'pages')


//here check is the condition/middleware that filters with the help of the condition taht the request query value must be according to the condition. ie. is provided inside the if block.
const check =(req, res, next)=>{
    if(req.query.user !== 'sukanta'){
        res.send('you are not authorised')
    }
    //here next() is a callback that allows the application to go through...
    //without next() the application will not proceed and will  stuck with the res.
    else{
        next();
    }
}

app.use(check);

app.get('/',(req, res)=>{
    res.send("this is middleware");
})


app.get('/about',(req, res)=>{
    res.sendFile(`${filepath}/filePage.html`);
})

app.listen(8000)