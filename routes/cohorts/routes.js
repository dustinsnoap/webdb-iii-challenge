const express = require('express')
const router = express.Router()
const db_cohorts = require('./model')

//ROUTE: /api/cohorts

//C
//add new cohort
router.post('/', async (req, res) => {
    try {
        const cohort = await db_cohorts.add(req.body)
        cohort
        ?   res.status(201).json(cohort)
        :   res.status(404).json({message: `New cohort couldn't be added.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
//get all cohorts
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
//get cohort by id
router.get('/:id', async (req, res) => {
    try {
        const cohort = await db_cohorts.get_by_id(req.params.id)
        cohort
        ?   res.status(200).json(cohort)
        :   res.status(404).json({message: `Couldn't find cohort ${req.params.id}.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get all students in a given cohort
router.get('/:id/students', async (req, res) => {
    try {
        const students = await db_cohorts.get_students_in_cohort(req.params.id)
        students.length > 0
        ?   res.status(200).json(students)
        :   res.status(400).json({message: `No students showed up to cohort ${req.params.id}.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//update cohort by id
router.put('/:id', async (req, res) => {
    try {
        await db_cohorts.update(req.params.id, req.body)
        ?   res.status(200).json({id: req.params.id, ...req.body})
        :   res.status(404).json({message: `Cohort ${req.params.id} couldn't be found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//D
//remove cohort by id
router.delete('/:id', async (req, res) => {
    try {
        await db_cohorts.remove(req.params.id)
        ?   res.status(200).json({message: `Cohort ${req.params.id} has been removed.`})
        :   res.status(404).json({message: `Cohort ${req.params.id} couldn't be found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router