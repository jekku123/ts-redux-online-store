import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { cartProducts } from '../redux/features/cart/cartSlice';
import { useAppSelector } from '../redux/hooks';

const StoreNavbar: React.FC = () => {
    const cart = useAppSelector(cartProducts);

    return (
        <Navbar bg='dark' variant='dark' expand='md'>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>My Store</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/products'>
                            <Nav.Link>Cart ({cart.length})</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default StoreNavbar;
