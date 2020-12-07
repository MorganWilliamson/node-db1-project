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
        res.json(500).json({ message: error.message })
    }
})


router.get()


router.post()


router.put()


router.delete()

