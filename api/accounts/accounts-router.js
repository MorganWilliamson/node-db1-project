///// IMPORTS /////
const express = require('express')
const Account = require('./accounts-model');
const router = express.Router();

///// MIDDLEWARE /////
// write a middleware to validate ID. 
// Apply this middleware to the post, put, and delete functions.

///// ENDPOINTS /////
router.get('/', async (req, res) => {
    try{
        const data = await Account.getAllAccounts()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const account = await Account.getById(id)
        res.json(account)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// router.post()


// router.put()


// router.delete()



module.exports = router;
