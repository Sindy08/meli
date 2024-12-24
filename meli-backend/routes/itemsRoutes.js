const express = require('express');
const { fetchItems, fetchItemDetails } = require('../controllers/itemsController');

const router = express.Router();

router.get('/', fetchItems);
router.get('/:id', fetchItemDetails);

module.exports = router;
