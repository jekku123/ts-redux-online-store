import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { LinkContainer } from 'react-router-bootstrap';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';

const Cart = () => {
    const { cart, totalPrice, totalItems, removeFromCart, setDelivery } =
        useCart();

    return (
        <MDBContainer className='py-5' style={{ backgroundColor: '#eee' }}>
            <MDBRow className='justify-content-center align-items-center'>
                <MDBCol size='12'>
                    <MDBCard
                        className='card-registration card-registration-2'
                        style={{ borderRadius: '15px' }}
                    >
                        <MDBCardBody className='p-0'>
                            <MDBRow className='g-0'>
                                <MDBCol lg='8'>
                                    <div className='p-5'>
                                        <div className='d-flex justify-content-between align-items-center mb-5'>
                                            <MDBTypography
                                                tag='h1'
                                                className='fw-bold mb-0 text-black'
                                            >
                                                Shopping Cart
                                            </MDBTypography>
                                            <MDBTypography className='mb-0 text-muted'>
                                                {totalItems} items
                                            </MDBTypography>
                                        </div>

                                        <hr className='my-4' />

                                        <CartItem
                                            cart={cart}
                                            removeFromCart={removeFromCart}
                                        />

                                        <hr className='my-4' />

                                        <div className='pt-5'>
                                            <MDBTypography
                                                tag='h6'
                                                className='mb-0'
                                            >
                                                <LinkContainer to='/'>
                                                    <MDBCardText
                                                        tag='a'
                                                        className='text-body'
                                                    >
                                                        <MDBIcon
                                                            fas
                                                            icon='long-arrow-alt-left me-2'
                                                        />{' '}
                                                        Back to shop
                                                    </MDBCardText>
                                                </LinkContainer>
                                            </MDBTypography>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol lg='4' className='bg-grey'>
                                    <div className='p-5'>
                                        <MDBTypography
                                            tag='h3'
                                            className='fw-bold mb-5 mt-2 pt-1'
                                        >
                                            Summary
                                        </MDBTypography>

                                        <hr className='my-4' />

                                        <MDBTypography
                                            tag='h5'
                                            className='text-uppercase mb-3'
                                        >
                                            Shipping
                                        </MDBTypography>

                                        <div className='mb-4 pb-2'>
                                            <select
                                                className='select p-2 rounded bg-grey'
                                                style={{ width: '100%' }}
                                                onChange={() =>
                                                    setDelivery((prev) => !prev)
                                                }
                                            >
                                                <option value='1'>
                                                    Standard-Delivery- €5.00
                                                </option>
                                                <option value='2'>
                                                    Pick-up- €0.00
                                                </option>
                                            </select>
                                        </div>

                                        <hr className='my-4' />

                                        <div className='d-flex justify-content-between mb-5'>
                                            <MDBTypography
                                                tag='h5'
                                                className='text-uppercase'
                                            >
                                                Total price
                                            </MDBTypography>
                                            <MDBTypography tag='h5'>
                                                € {totalPrice}
                                            </MDBTypography>
                                        </div>

                                        <MDBBtn color='dark' block size='lg'>
                                            Order
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Cart;
