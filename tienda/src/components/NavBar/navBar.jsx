import CartWidget from "../CartWidget/cartWidget"
import React from "react"

const NavBar = () => {
    return (
        <header>
            <h1>Tienda Online</h1>
            <nav clasName="navBar">
                <ul className="navBar-menu">
                    <li>Catálogo</li>
                    <li>Contacto</li>
                    <li> <CartWidget /> </li>
                </ul>
            </nav>
            
        </header>
        
    )
}

export default NavBar