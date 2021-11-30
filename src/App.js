

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './components/ejemplo/Clicker/Clicker';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';

function App() {
  
  return (
    <div className="mi.app">
      <>
        <BrowserRouter>
          
          <NavBar />
          <HomeView titulos ="Taller en ingenieria Electrica" contenido ="Fabricacion y reparacion de equipo de soldadura por punto y fuentes de CC"/>


          <Routes>
            
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/productos/:catId" element={<ItemListContainer/>}/>
            <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartView/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          
          </Routes>
                  
            
                 
        </BrowserRouter>
     
      </>
     

    </div>
  )
}

export default App;
