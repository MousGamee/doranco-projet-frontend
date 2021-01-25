import Rating from "./Rating"
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt="product" />
            </Link>
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating raiting={product.raiting} numReviews={product.numReviews} />
                <div className="price">
                    {product.price} €
                </div>
            </div>
        </div>
    )
}

export default Product
