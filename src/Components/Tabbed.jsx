import '../styles/Tabbed.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Tabbed({ingredients, dietary, allergens}){
    const [key, setKey] = useState('Ingredients');
    


  
    const arrayDataItems = ingredients.map((ingredient) => 
        <li key={ingredient}> {ingredient}</li>
    )

    const dietary2 = dietary.map((diet) => 
        <li key={diet}> {diet}</li>
    )
   
    const allergens2 = allergens.map((allergen) => 
        <li key={allergen}> {allergen}</li>
    )
   
    
    
    return(   
        <>

        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 tabs-main">
            <Tab eventKey="Ingredients" title="Ingredients" className="tabtitle">
                

                <ul className="tabUl">
                    {arrayDataItems}
                </ul>
            </Tab>
            <Tab eventKey="Dietary" title="Dietary Preferences" className="tabtitle">
                <ul className="tabUl">
                    {dietary2}
                </ul>
            </Tab>
            <Tab eventKey="Allergens" title="Allergens" className="tabtitle">
                <ul className="tabUl">
                   {allergens2}
                </ul>
            </Tab>
        </Tabs>
        </>
    )
}