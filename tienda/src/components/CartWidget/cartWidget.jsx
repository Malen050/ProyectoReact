import React from "react";
import { Link } from "react-router-dom";



const CartWidget = () => {
    return (
        <React.Fragment>
        
            <Link to="/cart">
                <button>
                    <div className="cart">🛒0 </div>
                </button>
            </Link>
           
       </React.Fragment>
    )
}

export default CartWidget;