const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findIngredients,
  add,
  update,
  remove
}

function find() {
  return db('recipes')
}

function findById(id) {
  return db('recipes')
      .where({id})
      .first()
}

function findIngredients(recipe_id) {
  return db('ingredients as i')
      .join('recipes as r', 'r.id', 'i.recipe_id')
      .select('i.id', 'i.name', 'r.name')
      .where({ recipe_id })
}

async function add(recipe) {
  const [ id ] = await db('recipes').insert(recipe)
  return findById(id)
}

async function update(changes, id) {
  await db('recipes')
    .where({ id })
    .update(changes)

  // returns new recipe 📓
  return findById(id)
}

function remove(id) {
  // returns removed count
  return db('recipes')
    .where({ id })
    .del()
}