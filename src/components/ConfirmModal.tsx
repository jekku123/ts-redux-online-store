import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { IProduct } from '../services/products/productApi';

export function ConfirmModal(props: IProduct) {
  const { addToCart } = useCart();

  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const handleAccept = () => {
    addToCart(props);
    toggleModal();
  };

  return (
    <>
      <MDBBtn color="dark" onClick={toggleModal}>
        Add to cart
      </MDBBtn>
      <MDBModal show={isModal} setShow={setIsModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle tag="h5">Add to cart?</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="dark"
                onClick={toggleModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody tag="h6">{props.title}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="dark" onClick={handleAccept}>
                Yes
              </MDBBtn>
              <MDBBtn color="dark" onClick={toggleModal}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
