const express = require('express');
const router = express.Router()
const { all, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracksController')
const { validatorCreateItem} = require('../validators/tracksValidator')
router
    .get('/', all)
    .get('/:id', getItem)
    .post('/', validatorCreateItem, createItem)
    .put('/:id', updateItem)
    .delete('/:id', deleteItem)

module.exports = router;