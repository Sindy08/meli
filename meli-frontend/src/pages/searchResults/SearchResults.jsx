import React from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import ListProduct from "../../components/listProduct/ListProduct";
import useSearchResults from "./useSearchResults";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const {
    products,
    categories,
    loading,
    error,
    currentPage,
    setCurrentPage,
    hasMore,
    fetchProducts,
    totalPages,
  } = useSearchResults(query);

  if (loading) {
    return (
      <div className="container loading">
        <p className="loading__text">Cargando resultados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  
  return (
    <>
      <section className="container category">
        <div className="category__content">
          <h1 className="untitled">Resultado de búsqueda</h1>
          {products.map((product) => (
            <ListProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={setCurrentPage}
        hasMore={hasMore}
        fetchProducts={fetchProducts}
      />
    </>
  );
};

export default SearchResults;
