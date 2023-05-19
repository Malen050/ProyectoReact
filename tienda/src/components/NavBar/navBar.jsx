import CartWidget from "../CartWidget/cartWidget"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import React from "react"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <><header>

            <h1>Coffee Shop</h1>

            <Link to="/"> <img className="img-logo" src="https://us.123rf.com/450wm/alluranet/alluranet2201/alluranet220100073/180502753-caf%C3%A9-taza-frijol-icono-ilustraci%C3%B3n-marca-identidad.jpg?ver=6" alt="" /> </Link>
            
            <nav className="navBar">
                <ul className="navBar-menu">
                    <li> <NavLink to= "/categoria/cafe" > Cafe  </NavLink>  </li>
                    <li> <NavLink to="/categoria/cafetera" > Cafetera </NavLink>  </li>
                    <li> <NavLink to="/categoria/tazas" > Tazas  </NavLink>  </li>
                    
                    <li> <CartWidget /> </li>
                </ul>
            </nav>

        </header>
            
            <main>
                
                <ItemListContainer />
                
            </main></>
        
    )
}

export default NavBar