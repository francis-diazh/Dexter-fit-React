import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget';



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Dexter-FIT</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/proteinas"}>Proteinas
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/aminoacidos"}>Aminoacidos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/creatinas"}>Creatinas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/barras"}>Barras Proteicas</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscador</button>
            </form>
          </div>
          
            <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar; 



