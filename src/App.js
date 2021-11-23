

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './components/ejemplo/Clicker/Clicker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div className="mi.app">
      <>
        <BrowserRouter>
          
          <Routes>
            <Route path="/" />


          </Routes>
          <NavBar />

          
          <HomeView
           titulos ="Taller en ingenieria Electrica" 
           contenido ="Fabricacion y reparacion de equipo de soldadura por punto y fuentes de CC"/>
            
          <ItemListContainer/>

          <ItemDetailContainer/>
        
        </BrowserRouter>
     
      </>
     

    </div>
  )
}

export default App;
