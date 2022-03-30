import React from "react";
import "../../styles/home.css";
import { Button, Card } from "react-bootstrap";
import { CartaPokemon } from "../component/cartaPokemon";

export const Home = () => (
<div className="abuelo">

    <div className="cuadrodecartas">
      <div className="kanto">Pokedex Kanto</div>
      <div className="d-flex">
    <CartaPokemon/> 
    <CartaPokemon/> 
    <CartaPokemon/> 
    <CartaPokemon/> 
    <CartaPokemon/> 
    <CartaPokemon/> 
    <CartaPokemon/> 
     
    </div>
    </div>
  </div>
);
