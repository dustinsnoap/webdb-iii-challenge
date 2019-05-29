const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config)
const tlb = db('cohorts')

//C
const add = async cohort => await tlb.insert(cohort)
//R
const get = async () => await tlb
const get_by_id = async id => await tlb.where({id})
//U
const update = async (id, changes) => await tlb.where({id}).update(changes)
//D
const remove = async id => await tlb.where({id}).del()

module.exports = {add, get, get_by_id, update, remove}