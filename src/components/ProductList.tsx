import { Col, Container, Row } from 'react-bootstrap';
import { useGetProductsQuery } from '../redux/services/products/productApi';
import Product from './Product';

const List = () => {
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h2 className='text-center p-3'>List of products</h2>
            <Row xs={2} md={3} xl={4} className='g-4 justify-content-center'>
                {data?.map((product) => (
                    <Col key={product.id}>
                        <Product key={product.id} product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default List;
