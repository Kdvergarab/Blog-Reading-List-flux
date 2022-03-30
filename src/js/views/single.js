import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (

<div className="todo">
	
		<div className="cartass">
        <img className="imagen"
          variant="top"
          src="https://nintendo.pe/wp-content/uploads/2018/05/f51d08be05919290355ac004cdd5c2d6.png"
        />

<div className="descripcion">
	<h1>Nombre del pokemon</h1>
	<p>clasificaciones</p>
	<p>tipo de agua</p>
</div>

			<hr className="my-4" />


</div>
			<Link to="/" className="botonvolver" >
				<span className="btn btn-primary btn-lg botonvolver1" href="#" role="button">
					Volver
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
