import { useContext, useState } from 'react';
import data from '../db.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import DishDetail from "../Components/DishDetail";
import {contextDishesId} from '../Components/IdContext';


export default function DishPage(){
    const {dishesId, setDishesId} = useContext(contextDishesId);
    return(

        <>


        {data.dishes.filter(dis => dis.id ===dishesId ).map((p) => {
            return <DishDetail id={p.id} image={p.image} name={p.name} description={p.description} ingredients={p.ingredients} dietary={p.tags.dietaryPreferences} allergens={p.tags.allergens} price={p.price} key={p.id} />
        })}    
        
        </>
    )
}