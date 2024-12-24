import { useState, useEffect } from "react";

const usePagination = ({ currentPage, totalPages, hasMore, fetchProducts, handlePageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  
  useEffect(() => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(5, totalPages);
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(totalPages - 4, 1);
    }

    const newPageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      newPageNumbers.push(i);
    }

    setPageNumbers(newPageNumbers);
  }, [currentPage, totalPages]);

  const handlePageChangeNew = (pageNumber) => {
    handlePageChange(pageNumber);
    if (pageNumber === totalPages && hasMore) {
      fetchProducts(pageNumber + 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChangeNew(currentPage + 1);
    } else if (hasMore) {
      fetchProducts(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChangeNew(currentPage - 1);
    }
  };

  return {
    pageNumbers,
    handlePageChangeNew,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePagination;
