import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { productos  } from "../ItemListContainer/productos";


const ItemDetailContainer = () => {

    const [data, setData] = useState({})

    const {itemId} = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        });

        getData.then(res => setData(res.find(Item => Item.id === parseInt(itemId))))
       
    })

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;