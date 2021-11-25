

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'
import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './components/ejemplo/Clicker/Clicker';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartWidget } from './components/CartWidget/CartWidget';

function App() {
  
  return (
    <div className="mi.app">
      <>
      <NavBar />
          <HomeView
           titulos ="Taller en ingenieria Electrica" 
           contenido ="Fabricacion y reparacion de equipo de soldadura por punto y fuentes de CC"/>
        <BrowserRouter>
          
          <Routes>
            
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detail" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartWidget/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          
          </Routes>
                  
            
                 
        </BrowserRouter>
     
      </>
     

    </div>
  )
}

export default App;
