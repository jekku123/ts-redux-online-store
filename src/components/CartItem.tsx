import {
    MDBCardImage,
    MDBCol,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from 'mdb-react-ui-kit';
import { ICart } from '../redux/features/cart/cartSlice';

type CartItemProps = {
    cart: ICart['cartItems'];
    removeFromCart: (id: string) => () => void;
};

const CartItem = ({ cart, removeFromCart }: CartItemProps) => {
    return (
        <>
            {cart.map((item) => (
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
            ))}
        </>
    );
};

export default CartItem;
