import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const StoreNavbar = () => {
    return (
        <Navbar bg='primary' variant='dark' expand='md'>
            <Container>
                <div className='d-flex justify-content-between w-100'>
                    <Navbar.Brand>My Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                </div>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link>Cart</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default StoreNavbar;
