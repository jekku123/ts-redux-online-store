import { Card } from 'react-bootstrap';
import { IProduct } from '../features/store/productsSlice';

const Product = ({ image, title, description }: IProduct) => {
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
            </Card.Body>
        </Card>
    );
};

export default Product;
