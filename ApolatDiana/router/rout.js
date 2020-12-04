const express = require('express');
const router = express.Router();
const IndexModel = require('../models/IndexModel');

router.get('/data', (req, res) => {
   
    res.render('index', { title: 'Test Registration form' });
});


       
router.post('/data', async (req, res) => {
    try {
        const user = new IndexModel(req.body);
        console.log(user);
        await user.save( () => {
         console.log('save was successfull')
            res.redirect("/data");
        });
    } catch (err) {
        res.status(400).send("Sorry! Something went wrong.");
        console.log(err);
    }
});

module.exports = router;