import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './componentes/Navbar';
import Cart from './componentes/Cart';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error404 from './componentes/Error404';
import CartContextProvider from './componentes/context/CartContext';



function App() {
  return (
    <CartContextProvider>
   <BrowserRouter>
    <Navbar/>
    <br/>
    <h1>Bienvenidos a Dexter Fit</h1>
    <h3>Nuestras recomendaciones:</h3>
    <Routes>
      <Route path={"/"} element={<ItemListContainer />}/>
      <Route path={"/category/:id"} element={<ItemListContainer />}/>
      <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
      <Route path={"/cart"} element={<Cart/>}/>
      <Route path={"*"} element={<Error404/>}/>

    </Routes>    
   </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;


