import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    if (data) {
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <h2>ProductDetail Page</h2>

      {product ? (
        <div style={{ display: 'flex' }}>
          <img src={product.thumbnail} alt='Product' />
          <div>
            <h3>{product.title}</h3>
            <h3>$ {product.price}</h3>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
