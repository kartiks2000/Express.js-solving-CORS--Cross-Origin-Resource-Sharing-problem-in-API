const express = require('express');
const bodyparser = require('body-parser');

const feedroutes = require('./routes/feedroutes');

const app = express();


// Used when we work with <form>
// app.use(bodyparser.urlencoded({extended:false}));

// Used to Parse JSON
app.use(bodyparser.json());


// Including required headers to solve the CORS- Cross Origin Resource Sharing while sending request to api from other server.... BUT it should always be after registering bodyparser -: 
// app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use('/feed',feedroutes);

// app.use('/home',(req,res,next)=>{
//     res.send('<h1>Hello</h1>')
// });

// app.use('/exit',(req,res,next)=>{
//     res.send('<h1>Bye </h1>')
// });

app.listen(8080);