const express = require('express');
const app = express();
const path = require('path');
const route = express.Router();  //using the internal ExpressJS route

const filepath = path.join(__dirname, 'pages')




//here check is the condition/middleware-Function that filters with the help of the condition taht the request query value must be according to the condition. ie. is provided inside the if block.
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

route.use(check)


//for route level middleware we don't need app.use()... we can simply take the middleware function as the 2nd parameter in whichever route we need.

//app.use(check);


//since check() is our middleware here we can take this as the 2nd callback in our routes to apply middleware to some specific routes.


//here we can access the home route without any restriction but for other two we have to pass through the middleware.
app.get('/',(req, res)=>{
    res.send("this is middleware home");
})

//using check() as a middleware for the specific route to go through.


app.get('/about',check,(req, res)=>{
    res.sendFile(`${filepath}/filePage.html`);
})

app.get('/protected',check,(req, res)=>{
    res.send('success!,this is a protected route');
})


//we can also make use of the ExpressJS route and define the routes which will act as a middleware. like...



//------

app.use('/', route)

route.get('/protectedroute',(req, res)=>{
    res.send('this is a protected route using the internal route of expressJS');
    
})

//------

app.listen(9000)