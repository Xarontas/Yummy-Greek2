import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Order.css';

export default function Order({}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
        <Button variant="warning" onClick={handleShow}>
            My order
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='modalBodyDiv'>
                    <img src="moussaka.jpg" alt="food image" width="40" height="40" />
                    <span>Moussaka</span>
                    <span>15.99€</span>
                    <span>x</span>
                </div>
                <div className='modalBodyDiv'>
                    <img src="greek-salad.jpg" alt="food image" width="40" height="40" />
                    <span>Greek Salad</span>
                    <span>10.99€</span>
                    <span>x</span>
                </div>
            </Modal.Body>
            <Modal.Footer className='border-0'>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={handleClose}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}