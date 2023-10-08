import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabbed from "./Tabbed";
import Button from 'react-bootstrap/Button';
import '../styles/DishDetail.css'
import Placed from "./Placed";

export default function DishDetail({id, name, description, price, tags, ingredients, image}){
    () => {const urlImage = {image}};
    console.log("con:", [ingredients[0]]);
    return(
        <>
        
        <Container className="px-0 pt-2 dishBg">
            <div>
                <div className='titleBg'>
                    <h2 className="pt-4 text-center">
                        {name}
                    </h2> 
                </div>

                <div className="row dishDiv">
                    <div className="col-md-4 dishImage" style={{backgroundImage: `url(${image}`}}></div>
                    <div className="col-md-8">                
                        <p className="dishPar">{description}</p>
                        <div className="text-end fw-bold">{price}€</div>
                    </div>
                </div>
                <Tabbed {...ingredients} />
            </div>
            <div className="d-flex justify-content-around my-4">
               <Link to='/'>
                    <Button  className='px-5 btnBack'>Back to all dishes</Button>
               </Link>
                
                <Button variant="warning" className='px-5'>Order</Button>
            </div>

        </Container>
        </>
    )
}