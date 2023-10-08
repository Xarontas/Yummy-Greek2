import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import '../styles/Placed.css';

export default function Placed(){
    const [show, setShow] = useState(false);
    return(
        <>
        <Row>
            <Col xs={12}>
                <div onClick={() => setShow(true)} className='shadow mb-2 bg-body rounded toastDiv'>
                    <img src="food-serving.png" width="30px" height="30px" className='mb-2 me-1'/>
                    Order
                </div>  
            </Col>
            <Col xs={12} className='d-flex justify-content-center'>
                <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
                    {/* <Toast.Header></Toast.Header> */}
                    <Toast.Body>Your order has been placed.</Toast.Body>
                </Toast>
            </Col>
        </Row>
    
        </>
    )
}