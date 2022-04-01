import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
<>
		{store.pokemones.map((e) =>{
			if (e.id.toString() === params.theid) {
				console.log(e);
				return (
					<div className="todo">

					<div className="cartass">
						<img className="imagen"
							variant="top"
							src={e.sprites.other.dream_world.front_default}
						/>
		
						<div className="descripcion">
							<h1>{e.name}</h1>
							<p>Este pokemon mide {e.height}0 CM y pesa aproximadamente {e.weight}0 gramos </p>
							<p> Este pokemon es de tipo {e.types[0].type.name}</p>
						</div>
		
						<hr className="my-4" />
		
		
					</div>
					<Link to="/" className="botonvolver" >
						<span className="btn btn-primary btn-lg botonvolver1" href="#" role="button">
							Volver
						</span>
					</Link>
					</div>
				)
			}	
		// return	e.id === params.theid
		})}

			</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
