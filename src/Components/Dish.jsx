import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../styles/Dish.css';
import Placed from './Placed';
import {contextDishesId} from './IdContext';



export default function Dish({id, image, name, description, price}){

    const {dishesId, setDishesId} = useContext(contextDishesId);
    
    return(
        
        <>
        
        <div className='divDish'>
            <div>
                <Card className='cardDish'>
                    <div className='row justify-content-between'>
                        <div className='col-md-2 mb-3'>
                            <Card.Img  src={image} />
                        </div>
                    
                        <div className='col-md-7 border-end'>
                            <Card.Body >
                                <h3>{name}</h3>
                                <p >
                                   {description}
                                </p>
                                <div className='text-end'>
                                   < Link to='dishes/id'>
                                        <Button variant="light" className='px-5 border' onClick={()=>{setDishesId(id)}}>more </Button>   
                                    </Link> 
                                </div>              
                            </Card.Body>
                        </div>
                        <div className='col-md-3'>
                            <div className='fw-bold mb-2 pb-5'>
                                {price}€
                               
                            </div>
                            <Placed />
                        </div>
                    </div>   
                </Card>
            </div>
        </div>
        </>
    )
}