import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Button, Card } from "react-bootstrap";
import { CartaPokemon } from "../component/cartaPokemon";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <div className="abuelo">
    <div className="cuadrodecartas">
      <div className="kanto">Pokemones Estilo Fuego</div>
      <div className="d-flex">
      {store.pokemones.filter((e, i)=>{
        return e.types[0].type.name === "fire"
      }).map((e) =>{
        return <CartaPokemon nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
      })   } 
      </div>
      </div> 
      </div>
  <div className="abuelo">
    <div className="cuadrodecartas">
      <div className="kanto">Pokemones Estilo Hierva</div>
      <div className="d-flex">
      {store.pokemones.filter((e, i)=>{
        return e.types[0].type.name === "grass"
      }).map((e) =>{
        return <CartaPokemon nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
      })   }   
    </div>
 {/* {store.pokemones.filter((e) => e.name === 'pikachu').map((e) => {
  return (
    <h1>{e.name}</h1>
  )})}   */}
    </div>
  </div>
    
    </>

)};
