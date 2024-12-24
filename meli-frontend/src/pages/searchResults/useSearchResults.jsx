import { useState, useEffect } from "react";
import { searchProducts } from "../../api/services/api";

const useSearchResults = (query) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const productsPerPage = 10;
  const totalProductsPerApiCall = 50;

  const fetchProducts = async (page) => {
    if (!query) return;

    try {
      setLoading(true);
      const data = await searchProducts(query, page, totalProductsPerApiCall);
      setCategories(data.categories);

      if (page === 1) {
        setProducts(data.items);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.items]);
      }

      setHasMore(data.items.length === totalProductsPerApiCall);
    } catch (err) {
      setError("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      setCurrentPage(1);
      setHasMore(true);
      fetchProducts(1);
    }
  }, [query]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return {
    products: currentProducts,
    categories,
    loading,
    error,
    currentPage,
    setCurrentPage,
    hasMore,
    fetchProducts,
    totalPages,
  };
};

export default useSearchResults;
