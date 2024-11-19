
const API_URL = 'https://fakestoreapi.com/products'; 

export const fetchProducts = async (searchQuery = '', categoryFilter = '') => {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    let filteredProducts = products;
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

   
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    return filteredProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const fetchProductDetail = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    const productDetail = await response.json();
    return productDetail;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    return {};
  }
};
