
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()

      tbl.text('name', 128)
        .unique()
        .notNullable()

      tbl.text('total_time', 128)
        .notNullable()

      tbl.text('quantity_one', 128)
        .notNullable()

      tbl.integer('ingredient_one')
        .unsigned()
        .notNullable()
        .references('ingredients.id')

      tbl.text('quantity_two', 128)
        .notNullable()

      tbl.integer('ingredient_two')
        .unsigned()
        .notNullable()
        .references('ingredients.id')

      tbl.text('quantity_three', 128)

      tbl.integer('ingredient_three')
        .unsigned()
        .references('ingredients.id')

        tbl.text('quantity_four', 128)

      tbl.integer('ingredient_four')
        .unsigned()
        .references('ingredients.id')

      tbl.text('quantity_five', 128)

      tbl.integer('ingredient_five')
          .unsigned()
          .references('ingredients.id')

      tbl.text('quantity_six', 128)

      tbl.integer('ingredient_six')
        .unsigned()
        .references('ingredients.id')
    })
    .createTable('ingredients', tbl => {
      tbl.increments()

      tbl.text('name')
        .unique()
        .notNullable()
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')

    .dropTableIfExists('ingredients')
}
