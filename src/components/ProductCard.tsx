/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
} from 'mdb-react-ui-kit';
import { useCart } from '../hooks/useCart';
import { IProduct } from '../redux/services/products/productApi';

type ProductProps = {
    product: IProduct;
};

const ProductCard = ({ product }: ProductProps) => {
    const { title, description, image } = product;
    const { addToCart } = useCart();

    return (
        <MDBCard style={{ width: '18rem' }}>
            <MDBCardImage
                src={image}
                alt={title}
                style={{
                    height: '200px',
                    objectFit: 'contain',
                }}
            />
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{description.slice(0, 100) + '...'}</MDBCardText>
                <MDBBtn color='dark' onClick={addToCart(product)}>
                    Add to cart
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ProductCard;
