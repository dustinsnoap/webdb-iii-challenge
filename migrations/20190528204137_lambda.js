//what changes are to be applied to the db
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cohorts', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl.timestamps(true, true)
    }),
    knex.schema.createTable('students', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
      tbl
        .integer('cohorts_id')
        .notNullable()
        .references('id')
        .inTable('cohorts')
      tbl.timestamps(true, true)
    })
  ])
}

// how can I undo the changes
exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('cohorts'),
    knex.schema.dropTableIfExists('students'),
  ])
};
