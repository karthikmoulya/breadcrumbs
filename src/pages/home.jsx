import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    if (data) {
      const slicingProducts = data.products.slice(0, 6);
      setTrendingProducts(slicingProducts);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <span>Trending Products 🔥</span>
      <div className='product-grid'>
        {trendingProducts?.map(({ id, thumbnail, title }) => {
          return <ProductCard key={id} product={{ id, thumbnail, title }} />;
        })}
      </div>
      <Link to={'/products'}>
        <button style={{ width: '100%', padding: 10, cursor: 'pointer' }}>
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
