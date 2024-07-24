const express = require ('express');
const app = express();
const cors = require('cors');
const contacts = require('./contact');

app.use(cors());
// parse application/json
app.use(express.json());

app.use((req,res, next) => {
    console.log(`It's ${ req.method} req ${ req.url } req`);
    next();
});

app.get('/', (req, res)=>{

    res.status(200).json({
        "res": "ok"
    })
});

app.post('/', (req, res) => {

    res.status(201).json({
        "res": "add ok"
    })
});

app.use('/contacts', contacts);

app.listen(3000, ()=>{
    console.log("server is running...");
});