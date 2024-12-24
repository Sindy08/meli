const { getItems, getItemDetails } = require('../services/itemsService');
const formatResponse = require('../utils/formatResponse');

exports.fetchItems = async (req, res) => {
  const { q, offset = 0 } = req.query;

  try {
    const data = await getItems(q, offset);
    const response = formatResponse.formatItems(data);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching items' });
  }
};

exports.fetchItemDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await getItemDetails(id);
    const response = formatResponse.formatItemDetails(data);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching item details' });
  }
};
