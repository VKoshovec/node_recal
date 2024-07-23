const express = require ('express');
const router = express.Router();
const contacts_souse = require('./resourse/contacts.json');

// router.use((req,res, next) => {
//     console.log(`It's ${ req.method } req ${ req.url } req`);
//     next();
// });

router.get('/', (req, res)=>{
    res.status(200).json({
        '/ respose contacts':'ok'
    })
});

router.get('/all', (req, res)=>{
    res.status(200).json(contacts_souse);
});

router.get('/one', (req, res)=>{
    const { id } = req.query;
    res.status(200).json(contacts_souse[id]);
});

module.exports = router;