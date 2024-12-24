import React from "react";
import { Link } from "react-router-dom";

const ListProduct = ({ product }) => {
  return (
    <Link
      to={`/items/${product.id}`}
      title={product.title}
      className="category__card"
      onClick={() => {
        localStorage.setItem(`product_seller`, product.seller);
        localStorage.setItem(`product_installments`, product.installments);
      }}
    >
      <img
        src={`https://http2.mlstatic.com/D_Q_NP_${product.picture}-V.webp`}
        alt={product.title}
        title={product.title}
        className="category__card-img"
        loading="lazy"
      />
      <div className="category__card-content">
        <div className="category__card-info">
          <h2 className="category__card-title">{product.title}</h2>
          <span className="category__card-seller">Por {product.seller}</span>
        </div>
        <div className="category__price-content">
          {product.price.regular_amount > product.price.amount && (
            <span className="category__price-discount">
              $ {Math.round(product.price.regular_amount).toLocaleString()}
            </span>
          )}
          <p className="category__price">
            $ {Math.round(product.price.amount).toLocaleString()}
            {product.price.regular_amount > product.price.amount && (
              <span className="category__price-off">
                {(((product.price.regular_amount - product.price.amount) / product.price.regular_amount) * 100).toFixed(0)}% OFF
              </span>
            )}
          </p>
          {product.installments && (
            <p className="category__installments">
              Mismo precio en {`${product.installments.split('x')[0]} cuotas de $ ${Math.round(parseFloat(product.installments.split('x')[1])).toLocaleString()}`}
            </p>
          )}
        </div>

        {product.free_shipping && (
          <span className="category__free">Envío gratis</span>
        )}
        {(product.condition === "used" || product.condition === "reconditioned") && (
          <span className="category__condition">
            {product.condition === "used" && "Usado"}
            {product.condition === "reconditioned" && "Reacondicionado"}
          </span>
        )}
      </div>
    </Link>
  );
};

export default ListProduct;
