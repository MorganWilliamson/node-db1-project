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
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const account = await Account.getById(id)
        res.status(200).json(account)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.post('/', validatePost, async (req, res) => {
    try { 
        const info = req.body
        const account = await Account.createAccount(info)
        res.status(201).json(account)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});


router.put('/:id', validatePost, async (req, res) => {
    try {
        const { id } = req.params
        const changes = req.body
        await Account.updateAccount(id, changes)
        const updated = await Account.getById(id)
        res.status(204).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// router.delete()



module.exports = router;
