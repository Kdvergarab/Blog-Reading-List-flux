import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { Card, Button } from "react-bootstrap";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.pokemones.map((e) => {
				if (e.id.toString() === params.theid) {
					let color = "gray"
					if (e.types[0].type.name === "fire") {
						color = "red"
					}
					else if (e.types[0].type.name === "grass") {
						color = "green"
					}
					else if (e.types[0].type.name === "poison") {
						color = "rebeccapurple"
					}
					else if (e.types[0].type.name === "water") {
						color = "aqua"
					}
					return (
						<div className="todo">

							<div className="cartass">
								<img className="imagen"
									variant="top"
									src={e.sprites.other.dream_world.front_default}
								/>

								<div className={`descripcion ${color}`}>
									<h1>{e.name.toUpperCase()}</h1>
									<br />
									<p>Este pokemon mide {e.height}0 CM y pesa aproximadamente {e.weight}0 gramos </p>
									<br />
									<p> Este pokemon es de tipo {e.types[0].type.name.toUpperCase()}</p>
								</div>

								<hr className="my-4" />


							</div>
							<div  className="botonvolver" >
							<Link to="/">
								<span className="btn btn-primary btn-lg botonvolver1" href="#" role="button">
									Volver
								</span>
							</Link>
							<Button className="botonpoke " onClick={() => {
            actions.agregarFavoritos(e.id)     
               }}><img className="pokeball"  
			   src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon6.png"
			 /></Button>
			   </div>
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
