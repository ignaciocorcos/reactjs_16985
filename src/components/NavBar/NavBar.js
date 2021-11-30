import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'
import { Link } from 'react-router-dom'



export const NavBar = () => {

    return(
        <div className="header">
            <Link to="/"><h1> Logo </h1></Link>
            <nav>
                <ul>
                    
                    
                    <li><Link to="productos/new">NEW</Link></li>
                    <li><Link to="productos/soldadura">Soldadura</Link></li>
                    <li><Link to="productos/rectificadores">Rectificadores</Link></li>
                    <li><Link to="productos/oferta">Ofertas</Link></li>
                    <li><Link to="productos/usado">Usados</Link></li>
                    
                </ul>
            </nav>
            <li><Link to="cart"><CartWidget/></Link></li>
            
    
        </div>
        ) 
        
        
}

//export default NavBar