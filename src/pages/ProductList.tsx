import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useGetProductsQuery } from '../redux/services/products/productApi';

const List: React.FC = () => {
    const { data, isLoading, error } = useGetProductsQuery();

    return (
        <Container>
            {isLoading ? (
                <h3 className='text-center p-3'>Loading...</h3>
            ) : error ? (
                <h3 className='text-center p-3'>There was an error :(</h3>
            ) : data ? (
                <>
                    <h2 className='text-center p-3'>List of products</h2>
                    <Row
                        xs={2}
                        md={3}
                        xl={4}
                        className='g-4 justify-content-center'
                    >
                        {data?.map((product) => (
                            <Col key={product.id}>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            </Col>
                        ))}
                    </Row>
                </>
            ) : null}
        </Container>
    );
};

export default List;
