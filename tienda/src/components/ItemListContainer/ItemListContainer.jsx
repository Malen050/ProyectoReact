import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { productos } from './productos';





const ItemListContainer = () => {

    const [data, setData] = useState([]);

    
    const { categoriaId } = useParams();
  
    useEffect(() => {
      const getData = new Promise((resolve) => {
      setTimeout(() => {
       resolve(productos);
      }, 2000);
    });
  
    if (categoriaId) {
     getData.then((res) => {
     const filterData = res.filter((item) => item.categoria.toLowerCase() === categoriaId.toLowerCase());
     setData(filterData);
     });
      
    } else {
      getData.then((res) => setData(res));
    }
      

    }, [categoriaId]
    );
  
        return (
        
            <ItemList data={data} />
    
        )
  };
  
  
  


export default ItemListContainer;

