import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import '../App.css';
import AllDishes from '../Components/AllDishes';
import Filters from '../Components/Filters';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


export default function AllDishesPage(){
  const [isActive, setIsActive]=useState(false);
  function handleClick(){
    setIsActive(current =>!current);
  }

    return (
        <>
          <Container className='p-0'> 
            <div className='row justify-content-between'>
              <div className=' col-md-3 mt-3 d-none d-md-block'>
                <Filters />
              </div>
              <div className='col-md-12 d-md-none d-block mt-3'>
                <Button onClick={handleClick} className='mb-3 w-100' style={{backgroundColor:'olive', borderColor:'olive'}}>Show all filters</Button>
                <div className={isActive ? 'd-block' : 'd-none' }><Filters /> </div>           
              </div>
              <div className='col-md-9'>
                <AllDishes />
              </div>
            </div> 
          </Container>   
        </>
      )
}