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
            return <DishDetail id={p.id} image={p.image} name={p.name} description={p.description} ingredients={p.ingredients} price={p.price} key={p.id} />
        })}    
        
        {/* <DishDetail id={dishes.id} name="Moussaka" description="Moussaka is a delicious and hearty traditional Greek dish with layers of thinly sliced eggplant, seasoned ground beef or lamb, and a creamy béchamel sauce. It's a beloved comfort food in Greece and is often enjoyed during special occasions and family gatherings. This savory dish is a culinary masterpiece that combines the richness of ground meat, the earthiness of eggplant, and the smoothness of béchamel sauce." price={15.99} /> */}
        </>
    )
}