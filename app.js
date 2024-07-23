const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors());

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
})

app.listen(3000, ()=>{
    console.log("server is running...");
});