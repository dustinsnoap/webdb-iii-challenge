const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

//C
const add = async cohort => await db('cohorts').insert(cohort)
//R
const get = async () => await db('cohorts')
const get_by_id = async id => await db('cohorts').where({id})
const get_students_in_cohort = async id =>
    await db('cohorts as c')
        .join('students as s', {'s.cohorts_id': 'c.id'})
        .select('s.*')
        .where('c.id', id)


//U
const update = async (id, changes) => await db('cohorts').where({id}).update(changes)
//D
const remove = async id => await db('cohorts').where({id}).del()

module.exports = {add, get, get_by_id, get_students_in_cohort, update, remove}