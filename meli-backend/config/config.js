require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  baseUrl: process.env.BASE_URL || 'https://api.mercadolibre.com',
};
