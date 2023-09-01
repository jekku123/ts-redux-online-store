import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { IProduct } from '../features/store/productsSlice';
import { fetchProducts } from '../features/store/storeAPI';
import Product from './Product';

const List = () => {
    const products: IProduct[] = useAppSelector(
        (state) => state.products.products
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Container>
            <h2 className='text-center p-3'>List of products</h2>
            <Row xs={2} md={3} xl={4} className='g-4 justify-content-center'>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Product key={product.id} {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default List;
