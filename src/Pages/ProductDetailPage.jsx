import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../api';
import { useCart } from '../context/useCart';
import '../Styles/ProductDetailPage.css'; 

const ProductDetailPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  
  useEffect(() => {
    const getProductDetail = async () => {
      const productData = await fetchProductDetail(id);
      setProduct(productData);
    };
    getProductDetail();
  }, [id]);

 
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;
