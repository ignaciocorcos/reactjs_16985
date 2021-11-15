

import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Clicker } from './components/ejemplo/Clicker/Clicker';

function App() {
  
  const [ greeting, setGreeting] = useState('Bienvenidos')

  setTimeout(() => {
    setGreeting ('Adios')
  }, 5000)

  const [mostrarClicker, SetMostarClicker]=useState(true)

  const handleMostar = ()=>{
    SetMostarClicker(!mostrarClicker)
  }

  return (
    <div className="mi.app">

      <NavBar />
      <HomeView
       titulos ="Taller en ingenieria Electrica" 
      contenido ="Fabricacion y reparacion de equipo de soldadura por punto y fuentes de CC"/>
     
      <ItemListContainer greeting = {greeting}/>
      <button onClick={handleMostar}>Mostrar</button>
     

      {mostrarClicker && <Clicker/>}

    </div>
  )
}

export default App;
