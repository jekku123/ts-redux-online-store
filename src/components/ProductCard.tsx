/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardImage,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { IProduct } from '../redux/services/products/productApi';
import { ConfirmModal } from './ConfirmModal';
import { Rating } from './Rating';

type ProductProps = {
    product: IProduct;
};

export function ProductCard({ product }: ProductProps) {
    const { title, description, image, rating, price, category } = product;
    const [isModal, setIsModal] = useState(false);
    const toggleModal = () => setIsModal(!isModal);

    return (
        <MDBCol key={product.id}>
            <MDBCard className='h-100 hover-shadow'>
                <div className='bg-image hover-zoom d-flex justify-content-center'>
                    <MDBCardImage
                        src={image}
                        alt={title}
                        className='mt-3'
                        style={{
                            height: '250px',
                            objectFit: 'contain',
                        }}
                    />
                </div>
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardSubTitle>{category}</MDBCardSubTitle>
                    <Rating rating={rating} />
                    <MDBCardText>
                        {description.slice(0, 150) + '...'}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <div className='d-flex justify-content-between align-items-center pb-1'>
                        <MDBCardText tag='h5'>€ {price}</MDBCardText>
                        <MDBBtn color='dark' onClick={toggleModal}>
                            Add to cart
                        </MDBBtn>
                        <ConfirmModal
                            isModal={isModal}
                            setIsModal={setIsModal}
                            toggleModal={toggleModal}
                            product={product}
                        />
                    </div>
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    );
}
