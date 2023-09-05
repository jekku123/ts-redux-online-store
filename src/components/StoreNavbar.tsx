import {
    MDBBadge,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { cartProducts } from '../redux/features/cart/cartSlice';
import { useAppSelector } from '../redux/hooks';

const StoreNavbar = () => {
    const cart = useAppSelector(cartProducts);
    const [showNavSecond, setShowNavSecond] = useState(false);

    return (
        <MDBNavbar expand='lg' dark bgColor='dark'>
            <MDBContainer>
                <LinkContainer to='/'>
                    <MDBNavbarBrand>Redux Store</MDBNavbarBrand>
                </LinkContainer>
                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavSecond}>
                    <MDBNavbarNav>
                        <LinkContainer to='/'>
                            <MDBNavbarLink>Products</MDBNavbarLink>
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <MDBNavbarLink>
                                Cart{' '}
                                <MDBBadge pill color='danger'>
                                    {cart.length}
                                </MDBBadge>
                            </MDBNavbarLink>
                        </LinkContainer>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default StoreNavbar;
