import React from "react";
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css"


const ItemDetail = ({data}) => {
    return (
        
        
        <div className="container-detail">
            <div className="detail">
                <img className="detail-img" src= {data.image} />
                <div className="contenido">
                    <h2 className="title-detail"> {data.titulo} </h2>
                    <p className="price-detail">${data.price} </p>
                    <p className="stock-detail"> Stock disponible: {data.stock}</p>
                    <p className=""> <ItemCount />  </p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;