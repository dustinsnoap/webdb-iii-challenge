const express = require('express')
const router = express.Router()
const db_cohorts = require('./model')

//C
//R
router.get('/', async (req, res) => {
    try {
        const cohorts = await db_cohorts.get()
        cohorts.length > 0
        ?   res.status(200).json(cohorts)
        :   res.status(404).json({message: `No cohorts found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router