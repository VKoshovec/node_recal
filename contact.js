const express = require ('express');
const router = express.Router();
const contacts_souse = require('./resourse/contacts.json');

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
    contacts_souse.length > id?res.status(200).json(contacts_souse[id]):res.status(404).json({ "req": "notfound"});
});

router.post("/", (req, res)=>{
   const { name, phone } = req.body;  
   contacts_souse.push({ name, phone });
   res.status(201).json(contacts_souse);
});

router.put('/one', (req, res)=>{
    const { id } = req.query;
    const { name, phone } = req.body;
    contacts_souse[id].name = name;
    contacts_souse[id].phone = phone;

    res.status(202).json(contacts_souse[id]);
});

module.exports = router;