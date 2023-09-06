import {
    MDBBtn,
    MDBCardImage,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { ICart } from '../redux/features/cart/cartSlice';
import { IProduct } from '../redux/services/products/productApi';
import { roundANumber } from '../utils/roundANumber';

type CartItemProps = {
    cart: ICart['cartItems'];
    removeFromCart: (id: number) => () => void;
    addToCart: (product: IProduct) => void;
    removeAll: (id: number) => void;
};

const CartItem = ({
    cart,
    removeFromCart,
    addToCart,
    removeAll,
}: CartItemProps) => {
    return (
        <>
            {cart.map((item) => (
                <MDBRow
                    className='mb-4 d-flex justify-content-between align-items-center'
                    key={item.product.id}
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
                    <MDBCol
                        md='3'
                        lg='3'
                        xl='3'
                        className='d-flex align-items-center'
                    >
                        <MDBBtn color='link' className='px-2'>
                            <MDBIcon
                                fas
                                icon='minus'
                                onClick={removeFromCart(item.product.id)}
                            />
                        </MDBBtn>

                        <MDBInput
                            type='text'
                            min='0'
                            value={item.cartQuantity}
                            size='sm'
                        />

                        <MDBBtn color='link' className='px-2'>
                            <MDBIcon
                                fas
                                icon='plus'
                                onClick={addToCart(item.product)}
                            />
                        </MDBBtn>
                    </MDBCol>
                    <MDBCol md='3' lg='2' xl='2' className='text-end'>
                        <MDBTypography tag='h6' className='mb-0'>
                            €{' '}
                            {roundANumber(
                                item.product.price * item.cartQuantity
                            )}
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md='1' lg='1' xl='1' className='text-end'>
                        <MDBIcon
                            fas
                            icon='times'
                            onClick={removeAll(item.product.id)}
                        />
                    </MDBCol>
                </MDBRow>
            ))}
        </>
    );
};

export default CartItem;
