import React from "react";
import usePagination from "./usePagination";

const Pagination = ({ currentPage, totalPages, handlePageChange, hasMore, fetchProducts }) => {
  const { pageNumbers, handlePageChangeNew, handleNextPage, handlePreviousPage } = usePagination({ currentPage, totalPages, handlePageChange, hasMore, fetchProducts });

  return (
    <section className="pagination">
      {totalPages > 1 && (
        <div className="pagination__content">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination__btn"
          >
            {"<"} Anterior
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChangeNew(page)}
              className={`pagination__number ${
                currentPage === page ? "pagination__number-active" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages && !hasMore}
            className="pagination__btn"
          >
            Siguiente {">"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Pagination;
