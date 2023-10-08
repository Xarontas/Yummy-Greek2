import data from '../db.json';
import Dish from "./Dish";
export default function AllDishes(){


    return(
        <>
        {data.dishes.map((p) =>{
            return <Dish id={p.id} image={p.image} name={p.name} description={p.description} price={p.price} key={p.id} />
            })}
        </>
    )
}