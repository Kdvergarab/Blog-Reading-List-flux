import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css"
import { Card, Button } from "react-bootstrap";

export const CartaPokemon = ({ nombre, imagen, tipo}) => {
	return (
<Card className="cartas" >
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
           Este pokemon es de tipo "{tipo.map((e, i) => {
             return e.type.name
           })}"
          </Card.Text>
          <div className="d-flex">
            <Link to="/single/0">
          <Button className="boton">Learn more!</Button>
          </Link>
          <Button className="botonpoke"> 
<img className="pokeball"  
          src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon6.png"
        /> </Button>
        </div>
        </Card.Body>
      </Card>
      )};