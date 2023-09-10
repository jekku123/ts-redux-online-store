/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
} from 'mdb-react-ui-kit';
import { IProduct } from '../services/products/productApi';
import { ConfirmModal } from './ConfirmModal';
import { Rating } from './Rating';

export function ProductCard(props: IProduct) {
  const { id, title, description, image, rating, price, category } = props;

  return (
    <MDBCol key={id}>
      <MDBCard className="h-100 hover-shadow">
        <div className="bg-image hover-zoom d-flex justify-content-center">
          <MDBRipple rippleTag="a" href="#!">
            <MDBCardImage
              src={image}
              alt={title}
              className="mt-3"
              style={{
                height: '250px',
                objectFit: 'contain',
              }}
            />
          </MDBRipple>
        </div>
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardSubTitle>{category}</MDBCardSubTitle>
          <Rating rating={rating} />
          <MDBCardText>{description.slice(0, 150) + '...'}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex justify-content-between align-items-center pb-1">
            <MDBCardText tag="h5">€ {price}</MDBCardText>

            <ConfirmModal {...props} />
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
}
