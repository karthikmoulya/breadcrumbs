import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card' key={product.id}>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        {product.price && <h3>${product.price}</h3>}
        {product.description && <p>{product.description}</p>}
      </Link>
    </div>
  );
};

export default ProductCard;
