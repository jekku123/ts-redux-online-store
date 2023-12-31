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
import reduxImg from '../assets/redux.svg';
import { useCart } from '../hooks/useCart';

export default function StoreNavbar() {
  const { totalItems } = useCart();
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="md" dark bgColor="dark">
      <MDBContainer>
        <LinkContainer to="/">
          <MDBNavbarBrand>
            <img src={reduxImg} height="30" alt="" loading="lazy" /> Redux Store
          </MDBNavbarBrand>
        </LinkContainer>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <LinkContainer to="/">
              <MDBNavbarLink>Products</MDBNavbarLink>
            </LinkContainer>
            <LinkContainer to="/cart">
              <MDBNavbarLink>
                Cart{' '}
                {totalItems > 0 ? (
                  <MDBBadge pill color="danger">
                    {totalItems}
                  </MDBBadge>
                ) : undefined}
              </MDBNavbarLink>
            </LinkContainer>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
