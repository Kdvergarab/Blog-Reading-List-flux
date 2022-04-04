import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/fav.css"
import { Nav, NavDropdown } from 'react-bootstrap'
import { Context } from "../store/appContext";



export const Fav = (props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="cajas">
			{store.pokemonesFavoritos.map((e, index) => {

				return (
					<Link to={"/single/" + e.id} className="letra">
						<div className="container border borde d-flex justify-content-between  " key={index}>
							<img className="imagenfav  justify-content-between "
								variant="top"
								src={e.sprites.other.dream_world.front_default}
							/>
							<div key={index} className="titulo"><strong>{e.name.toUpperCase()} </strong></div>

							<div className="cerrar"
								onClick={() => {
									actions.eliminarFavorito(index)
								}}>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</div>
						</div>
					</Link>
				)
			})}</div>
	)
});