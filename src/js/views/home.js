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
        return <CartaPokemon id={e.id} nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
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
        return <CartaPokemon id={e.id} nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
      })   }   
    </div>
    </div>
    <div className="abuelo">
    <div className="cuadrodecartas">
      <div className="kanto">Pokemones Estilo Veneno</div>
      <div className="d-flex">
      {store.pokemones.filter((e, i)=>{
        return e.types[0].type.name === "poison"
      }).map((e) =>{
        return <CartaPokemon id={e.id} nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
      })   }   
    </div>
    </div>
  </div>
    </div>
    <div className="abuelo">
    <div className="cuadrodecartas">
      <div className="kanto">Pokemones Estilo Agua</div>
      <div className="d-flex">
      {store.pokemones.filter((e, i)=>{
        return e.types[0].type.name === "water"
      }).map((e) =>{
        return <CartaPokemon id={e.id} nombre={e.name} imagen={e.sprites.other.dream_world.front_default} tipo={e.types}/>
      })   }   
    </div>
    </div>
  </div>
    
    </>

)};
