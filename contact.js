const express = require ('express');
const router = express.Router();

router.use((req,res, next) => {
    console.log(`It's ${ req.method } req ${ req.url } req`);
    next();
});

router.get('/', (req, res)=>{
    res.status(200).json({
        '/ respose contacts':'ok'
    })
});

router.get('/all', (req, res)=>{
    res.status(200).json({
        '/all respose contacts':'ok'
    })
});

module.exports = router;