///// IMPORTS /////
const express = require('express')
const Account = require('./accounts-model');
const router = express.Router();

///// MIDDLEWARE /////
// write a middleware to validate ID. 
// Apply this middleware to the post, put, and delete functions.
const validatePost = (req, res, next) => {
    next();
};

///// ENDPOINTS /////
router.get('/', async (req, res) => {
    try{
        const data = await Account.getAllAccounts()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const account = await Account.getById(id)
        res.json(account)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.post('/', validatePost, async (req, res) => {
    try { 
        const info = req.body
        const account = await Account.createAccount(info)
        res.json(account)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


// router.put()


// router.delete()



module.exports = router;
