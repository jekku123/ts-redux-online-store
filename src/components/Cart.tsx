import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { cartProducts, remove } from '../redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Cart = () => {
    const cart = useAppSelector(cartProducts);
    const dispatch = useAppDispatch();
    const [delivery, setDelivery] = useState(true);

    const removeFromCart = (id: string) => () => {
        dispatch(remove(id));
    };

    const totalPrice = cart.reduce((acc, curr) => {
        return acc + curr.product.price;
    }, 0);

    const totalItems = cart.length || 0;

    const items = cart.map((item) => (
        <MDBRow
            className='mb-4 d-flex justify-content-between align-items-center'
            key={item.cartItemId}
        >
            <MDBCol md='2' lg='2' xl='2'>
                <MDBCardImage
                    src={item.product.image}
                    fluid
                    className='rounded-3'
                    alt={item.product.title}
                />
            </MDBCol>
            <MDBCol md='3' lg='3' xl='3'>
                <MDBTypography tag='h6' className='text-muted'>
                    {item.product.title}
                </MDBTypography>
            </MDBCol>
            <MDBCol md='3' lg='3' xl='3' className='d-flex align-items-center'>
                <MDBBtn color='link' className='px-2'>
                    <MDBIcon fas icon='minus' />
                </MDBBtn>

                <MDBInput type='number' min='0' defaultValue={1} size='sm' />

                <MDBBtn color='link' className='px-2'>
                    <MDBIcon fas icon='plus' />
                </MDBBtn>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='text-end'>
                <MDBTypography tag='h6' className='mb-0'>
                    € {item.product.price}
                </MDBTypography>
            </MDBCol>
            <MDBCol md='1' lg='1' xl='1' className='text-end'>
                <MDBIcon
                    fas
                    icon='times'
                    onClick={removeFromCart(item.cartItemId)}
                />
            </MDBCol>
        </MDBRow>
    ));

    return (
        <section className='h-100 h-custom' style={{ backgroundColor: '#eee' }}>
            <MDBContainer className='py-5 h-100'>
                <MDBRow className='justify-content-center align-items-center h-100'>
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

                                            {items}

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

                                            <div className='d-flex justify-content-between mb-4'>
                                                <MDBTypography
                                                    tag='h5'
                                                    className='text-uppercase'
                                                >
                                                    items {totalItems}
                                                </MDBTypography>
                                                <MDBTypography tag='h5'>
                                                    € {totalPrice.toFixed(2)}
                                                </MDBTypography>
                                            </div>

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
                                                        setDelivery(!delivery)
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
                                                    €{' '}
                                                    {delivery
                                                        ? (
                                                              totalPrice + 5
                                                          ).toFixed(2)
                                                        : totalPrice.toFixed(2)}
                                                </MDBTypography>
                                            </div>

                                            <MDBBtn
                                                color='dark'
                                                block
                                                size='lg'
                                            >
                                                Register
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Cart;
