const express = require('express');
const { fetchItems, fetchItemDetails } = require('../controllers/itemsController');

const router = express.Router();

// Rutas
router.get('/', fetchItems); // Endpoint para buscar items
router.get('/:id', fetchItemDetails); // Endpoint para obtener detalles de un item

module.exports = router;
