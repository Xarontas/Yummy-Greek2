
import {Routes, Route} from 'react-router-dom';
import AllDishesPage from "./Pages/AllDishesPage";
import DishPage from "./Pages/DishPage";
import NavbarTop from './Components/NavbarTop';
import {contextDishesId} from './Components/IdContext';
import { useState } from 'react';


function App() {
  const [dishesId, setDishesId] = useState(null);
  return (
    

  
    <>
      <NavbarTop />
  <contextDishesId.Provider value = {{dishesId, setDishesId}}>    
      <Routes>
          <Route path='/' element={<AllDishesPage />} />
          <Route path='/dishes/id' element={<DishPage />} />
          <Route path='/dishes/:id' element={<DishPage />} />
      </Routes>
  </contextDishesId.Provider>
    </> 

  )
}

export default App
