import React from 'react';
import './App.css';
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
   <div className="container">
    <NavBar/>
    <br/>
    <ItemListContainer greeting={"Bienvenidos a DexterFit"}/>

   </div>
  );
}

export default App;

