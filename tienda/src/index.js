import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NavBar from './components/navBar/navBar';
import CartWidget from './components/CartWidget/cartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>
  },
  {
    path: "/cart",
    element: <CartWidget />
  },
  {
    path: "/categoria/:categoriaId",
    element: <ItemListContainer />
  },
  {
    path: "/item/:itemId",
    element: <ItemDetailContainer />
  },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
