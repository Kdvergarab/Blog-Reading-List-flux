import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/fav.css"
import {Nav, NavDropdown} from 'react-bootstrap'
import { Context } from "../store/appContext";


export const Fav = (props => {
	const { store, actions } = useContext(Context);

	console.log(store.pokemonesFavoritos);
	return (
		<div className="cajas">
				{store.pokemonesFavoritos.map((e,index) =>{
		
				return (
					<div className="container border borde d-flex justify-content-between  " key={index}>
                        <img className="imagenfav  justify-content-between "
							variant="top"
							src={e.sprites.other.dream_world.front_default}
						/>
						<div key={index}>{e.name.toUpperCase()}</div>

						<button
							className="cerrar"
							onClick={() => {
							actions.eliminarFavorito(index)
                            }}>
							x
						</button>
					</div>
				)
            })}</div>
            )
        });