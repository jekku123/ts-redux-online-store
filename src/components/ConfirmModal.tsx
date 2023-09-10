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
import { useCart } from '../hooks/useCart';
import { IProduct } from '../services/products/productApi';

type ConfirmModalProps = {
    isModal: boolean;
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    toggleModal: () => void;
    product: IProduct;
};

export function ConfirmModal({
    isModal,
    setIsModal,
    toggleModal,
    product,
}: ConfirmModalProps) {
    const { addToCart } = useCart();

    const handleAccept = () => {
        addToCart(product)();
        toggleModal();
    };

    return (
        <MDBModal show={isModal} setShow={setIsModal} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle tag='h5'>Add to cart?</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='dark'
                            onClick={toggleModal}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody tag='h6'>{product.title}</MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color='dark' onClick={handleAccept}>
                            Yes
                        </MDBBtn>
                        <MDBBtn color='dark' onClick={toggleModal}>
                            No
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
}
