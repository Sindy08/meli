import React from 'react';

const ProductCard = ({ product, selectedImage, setSelectedImage }) => {
  return (
    <div className="product__detail">
        <div className="product__content">
          <div className="product__gallery">
            {product.pictures.length > 1 && (
              <div className="product__tumbnails">
                {product.pictures.map((pic, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`product__tumbnails-btn ${
                      selectedImage === index ? "product__tumbnails-blue" : ""
                    }`}
                  >
                    <img src={pic} alt={`Vista ${index + 1}`} title={`Vista ${index + 1}`} loading="lazy" />
                  </button>
                ))}
              </div>
            )}
            <div className="product__image">
              <img
                src={product.pictures[selectedImage]}
                alt={product.title}
                title={product.title}
                className="product__image-select"
                loading="lazy"
              />
            </div>
          </div>

          <div className="product__info">
            <div className="product__info-quality">
              <span className="product__condition">
                {product.condition === "new" && "Nuevo"}
                {product.condition === "used" && "Usado"}
                {product.condition === "reconditioned" && "Reacondicionado"}
              </span>
              {product.sold_quantity > 0 && (
                <>
                  <span> | </span>
                  <span>{product.sold_quantity} +100 vendidos</span>
                </>
              )}
            </div>
            <div className="product__title-info">
              <h1 className="product__title">{product.title}</h1>
              {product.seller && (
              <span className="product__title-seller">
                Por {product.seller}
              </span>
              )}
            </div>

            <div className="product__price-content">
              {product.price.regular_amount > product.price.amount && (
                <span className="product__price-discount">
                  $ {Math.round(product.price.regular_amount).toLocaleString()}
                </span>
              )}
              <p className="product__price">
                $ {Math.round(product.price.amount).toLocaleString()}
                {product.price.regular_amount > product.price.amount && (
                  <span className="product__price-off">
                    {(((product.price.regular_amount - product.price.amount) / product.price.regular_amount) * 100).toFixed(0)}% OFF
                  </span>
                )}
              </p>
              {product.installments && (
                <p className="product__installments">
                  Mismo precio en {`${product.installments.split('x')[0]} cuotas de $  ${Math.round(parseFloat(product.installments.split('x')[1])).toLocaleString()}`}
                </p>
              )}
            </div>

            {product.free_shipping && (
              <span className="product__free">Envío gratis</span>
            )}
            <div className="border-t pt-4">
              <p className="product__characteristics">
                Lo que tienes que saber de este producto
              </p>
              <ul className="product__list">
                {product.attributes
                  .filter((attr) => attr.value_name !== null)
                  .slice(0, 10)
                  .map((attr) => (
                    <li key={attr.id} className="product__item">
                      <p className="text-gray-600">
                        {attr.name}: {attr.value_name}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {product.description && (
          <div className="product__description-content">
            <h2 className="product__description">Descripción</h2>
            {product.description.split("\n").map((paragraph, index) => (
              <p key={index} className="product__description-text">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
  );
};

export default ProductCard;