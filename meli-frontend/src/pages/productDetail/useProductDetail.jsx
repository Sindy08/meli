import { useState, useEffect } from "react";
import { getProductDetail } from "../../api/services/api";

const useProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const data = await getProductDetail(id);
        const seller = localStorage.getItem(`product_seller`);
        const installments = localStorage.getItem(`product_installments`);
        
        setProduct({
          ...data.item,
          seller,
          installments
        });
      } catch (err) {
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return {
    product,
    loading,
    error,
    selectedImage,
    setSelectedImage
  };
};

export default useProductDetail;
