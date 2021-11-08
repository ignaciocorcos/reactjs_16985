

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="mi.app">
      
      <NavBar />
      <HomeView titulos ="Taller en ingenieria Electrica" contenido ="Fabricacion y reparacion de equipo de soldadura por punto y fuentes de CC"/>
      <ItemListContainer greeting= "Bienvenidos"/>

    </div>
  )
}

export default App;
