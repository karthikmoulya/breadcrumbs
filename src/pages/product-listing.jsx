import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    if (data) {
      setProducts(data.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>ProductListing Page</h2>
      <div className='product-grid'>
        {products?.map(({ id, thumbnail, title, price }) => {
          return (
            <ProductCard key={id} product={{ id, thumbnail, title, price }} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
