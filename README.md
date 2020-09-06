# Express.js-solving-CORS--Cross-Origin-Resource-Sharing-problem-in-API
Express.js solving CORS- Cross Origin Resource Sharing problem in API

// Including required headers to solve the CORS- Cross Origin Resource Sharing while sending request to api from other server.... BUT it should always be after registering bodyparser -: 

// app.use(bodyparser.json());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
    
});
