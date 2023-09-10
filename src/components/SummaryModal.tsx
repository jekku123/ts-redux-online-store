import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { roundANumber } from '../utils/roundANumber';

export function SummaryModal() {
  const { cart, totalPrice, delivery } = useCart();

  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  return (
    <>
      <MDBBtn color="dark" block size="lg" onClick={toggleModal}>
        Order
      </MDBBtn>

      <MDBModal show={isModal} setShow={setIsModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className="border-bottom-0">
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-start text-black p-4">
              <MDBTypography tag="h4" className="mb-5">
                Payment summary
              </MDBTypography>

              {cart.map((item) => (
                <div key={item.product.id}>
                  <hr className="my-4" />

                  <div className="d-flex justify-content-between">
                    <p className="fw-bold mb-0">
                      {item.product.title}
                      <br />x {item.cartQuantity}
                    </p>
                    <p className="mb-0">
                      ${roundANumber(item.product.price * item.cartQuantity)}
                    </p>
                  </div>
                </div>
              ))}

              <hr className="my-4" />

              <div className="d-flex justify-content-between">
                <p className="small mb-0">Shipping</p>
                <p className="small mb-0">${delivery ? 5 : 0}</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">${roundANumber(totalPrice)}</p>
              </div>
            </MDBModalBody>

            <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
              <MDBBtn
                size="lg"
                color="dark"
                className="mb-1"
                onClick={toggleModal}
              >
                Pay
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
