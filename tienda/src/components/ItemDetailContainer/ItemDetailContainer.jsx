import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const productos = [
    { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSgTfqI5cPYGHNfk-rl1cwFC5KUH5YNdxe-Gd70vX0_x9wpnaXfYbWigBmkoFoSXdAKA&usqp=CAU", categoria: "Cafe", titulo: "Cafe de Brasil", price:"1500", stock: 10 },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjr1IPdj2RtjhA0ZT6zWK-mtDOcb8PbFDgtoU0EYGOJ0OvDxZyBkp7g-hyqNxwtPCXtY&usqp=CAU", categoria: "Cafe", titulo: "Cafe Colombiano", price:"1500", stock: 10  },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9eegoKkevQsLsSu22r1Sx3XLm4mH2QwyEX-vMTDMUxlvQz-w0jJxiuTqA3swUmubFaE&usqp=CAU", categoria: "Tazas", titulo: "Juego de taza y plato", price:"1500", stock: 10 },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ijJC9mlPH-c2LJp038Hff7Ak-fDDHdewO2vuTXH7i9mQ68C78VE8h0oaAi8AirfPJYw&usqp=CAU", categoria: "Cafetera", titulo: "Cafetera Dolce Gusto", price:"1500", stock: 10 },
    { id: 5, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/852/332/products/whatsapp-image-2022-12-28-at-8-36-34-pm-11-6ba79ef0bf0357bbef16723407725197-640-0.webp", categoria: "Cafetera", titulo: "Cafetera Italiana", price:"1500", stock: 10 },
    { id: 6, image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/064/046/products/barista-7-min1-1ef0c6bdea58bc499716379580450529-640-0.webp", categoria:"Tazas", titulo:"Taza doble vidrio", price:"1500", stock: 10}
]



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