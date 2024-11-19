
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../api/productApi';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProductDetail = async () => {
      const data = await fetchProductDetail(id);
      setProduct(data);
    };
    getProductDetail();
  }, [id]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
