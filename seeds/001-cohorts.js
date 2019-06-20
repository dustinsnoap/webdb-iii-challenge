
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').insert([
    {name: 'billy'},
    {name: 'bob'},
    {name: 'thorton'}
  ])
}
