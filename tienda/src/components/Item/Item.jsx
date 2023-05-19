import React from "react";
import { Link } from "react-router-dom";




const Item = ({info}) => {
    return (

        <main className="container-card">

            <div className="card">

                <img src= {info.image} className="card-img" alt= {info.titulo} />

                <div className="card-body">

                    <h5 className="card-title"> {info.titulo} </h5>
                            
                    <p className="price"> {info.price} </p>

                   <Link to={`/item/${info.id}`}> <button className="btn btn-primary"> Detalle </button> </Link>

                </div>
            </div>
        </main>
    )
}

export default Item;