import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductCard from "../../components/productCard/ProductCard";
import useProductDetail from "./useProductDetail";

const ProductDetail = ( ) => {
  const { id } = useParams();
  const { product, loading, error, selectedImage, setSelectedImage } = useProductDetail(id);

  if (loading) {
    return (
      <div className="container loading">
        <p className="loading__text">Cargando resultados...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product__error">
        {error || "No se encontró el producto"}
      </div>
    );
  }
  
  return (
    <div className="container product">
      <Breadcrumb categories={product.category_path_from_root} />
      <ProductCard product={product} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default ProductDetail;
