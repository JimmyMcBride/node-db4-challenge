
exports.seed = function(knex) {

  return knex('ingredients').truncate()
    .then(function () {

      return knex('ingredients').insert([
        {id: 1, name: 'flour'},
        {id: 2, name: 'egg'},
      ])
    })
}
