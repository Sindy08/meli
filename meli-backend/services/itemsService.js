const axios = require("axios");
const config = require("../config/config");

exports.getItems = async (query, offset = 0, limit = 50) => {
  try {
    const response = await axios.get(`${config.baseUrl}/sites/MLA/search`, {
      params: { q: query, offset, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error en getItems:", error.message); 
    throw error;
  }
};

exports.getItemDetails = async (id) => {
  try {
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(`${config.baseUrl}/items/${id}`),
      axios.get(`${config.baseUrl}/items/${id}/description`),
    ]);

    const categoryResponse = await axios.get(
      `${config.baseUrl}/categories/${itemResponse.data.category_id}`
    );

    return {
      item: itemResponse.data,
      description: descriptionResponse.data,
      category: categoryResponse.data,
    };
  } catch (error) {
    console.error("Error en getItemDetails:", error.message);
    throw error;
  }
};
