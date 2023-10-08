import '../styles/Tabbed.css';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Tabbed({...ingredients}){
    const [key, setKey] = useState('Ingredients');
    const ingred = [{...ingredients}];   
    
    const index = Object.keys(ingredients).length; 
    var ing;
    for (let i=0; i< index; i++){
    ing =  ingred.map((n) => {
    <li key={n[0][i]} value={n[0][i]}>
        fdfsdfsdf
    </li>  
      console.log(index);
    console.log(ing);
    })};
  
    
    
    return(   
        <>

        <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 tabs-main">
            <Tab eventKey="Ingredients" title="Ingredients" className="tabtitle">
                <ul className="tabUl">
                    {ing }
                    <li>----------------</li>
                    <li>{ingredients[0]}</li>
                    {/* <li>Thinly sliced eggplant</li> */}
                    <li>Seasoned ground beef or lamb</li>
                    <li>Onions</li>
                    <li>Garlic</li>
                    <li>Tomatoes</li>
                    <li>Red wine</li>
                    <li>Cinnamon</li>
                    <li>Nutmeg</li>
                    <li>Béchamel sauce</li>
                </ul>
            </Tab>
            <Tab eventKey="Dietary" title="Dietary Preferences" className="tabtitle">
                <ul className="tabUl">
                    <li>vegan</li>
                    <li>gluten-free</li>
                </ul>
            </Tab>
            <Tab eventKey="Allergens" title="Allergens" className="tabtitle">
                <ul className="tabUl">
                    <li>contains-nuts</li>
                    <li>contains-gluten</li>
                </ul>
            </Tab>
        </Tabs>
        </>
    )
}