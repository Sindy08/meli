import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
});

export const searchProducts = async (query, offset = 0) => {
  try {
    const { data } = await api.get('/items', {
      params: {
        q: query,
        offset
      }
    });
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

export const getProductDetail = async (id) => {
  try {
    const { data } = await api.get(`/items/${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};