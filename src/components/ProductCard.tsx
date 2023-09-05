import { Button, Card } from 'react-bootstrap';
import { useCart } from '../hooks/useCart';
import { IProduct } from '../redux/services/products/productApi';

interface ProductProps {
    product: IProduct;
}

const ProductCard = ({ product }: ProductProps) => {
    const { title, description, image } = product;
    const { addToCart } = useCart();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant='top'
                style={{
                    height: '200px',
                    objectFit: 'contain',
                    width: '100%',
                }}
                src={image}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description.slice(0, 100) + '...'}</Card.Text>
                <Button variant='secondary' onClick={addToCart(product)}>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
