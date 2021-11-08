import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.scss'

export const NavBar = () => {

    return(
        <div className="header">
            <h1> Logo </h1>
            <nav>
                <ul>
                    <li>NEW</li>
                    <li>Soldadura</li>
                    <li>Rectificadores</li>
                    <li>Ofertas</li>
                    <li>Usados</li>
                </ul>
            </nav>
            <CartWidget/>
    
        </div>
        ) 
        
        
}

//export default NavBar