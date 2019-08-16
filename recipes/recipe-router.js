const express = require('express')

const Recipes = require('./recipe-model.js')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find()
    res.json(recipes)
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get recipes 💩'
    })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const recipe = await Recipes.findById(id)
    if (recipe) {
      res.json(recipe)
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id 🤷‍'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get recipe 💩'
    })
  }
})

router.get('/:id/ingredients', async (req, res) => {
  const { id } = req.params
  try {
    const ingredients = await Recipes.findIngredients(id)
    res.json(ingredients)
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get ingredients 💩'
    })
  }
})

router.post('/', async (req, res) => {
  const recipeData = req.body
  try {
    const newRecipe = await Recipes.add(recipeData)
    res.status(201).json(newRecipe)
  } catch (err) {
    res.status(500).json({
      message: 'Failed to create new recipe 💩'
    })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const changes = req.body
  try {
    const recipe = await Recipes.update(changes, id)
    if (recipe) {
      res.json({ recipe })
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id 🤷‍'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to update recipe 💩'
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const count = await Recipes.remove(id)
    res.json({message: `${count} recipes deleted`})
  } catch (err) {
    res.status(500).json({
      message: 'Failed to delete user 💩'
    })
  }
})

module.exports = router