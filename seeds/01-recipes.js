
exports.seed = function(knex) {

  return knex('recipes').truncate()
    .then(function () {

      return knex('recipes').insert([
        { id: 1, name: 'Pasta', total_time: '4 hours',
        quantity_one: '100 grams', ingredient_one: 1,
        quantity_two: '1 whole', ingredient_two: 2 },
      ])
    })
}
