import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Order from './Order';

export default function NavbarTop (){
    return(
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">  
                        <img
                            alt="logo Yummy Greek"
                            src="logo2.png"
                            width="80"
                            height="80"
                            className="d-inline-block align-center"
                        />
                        {' '} 
                    </Navbar.Brand>
                    <div className='fw-bold fs-9'>MENU</div>
                    <Order />
                </Container>
            </Navbar>
        </>
    )

}