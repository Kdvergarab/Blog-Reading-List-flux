import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css"
import { Card, Button } from "react-bootstrap";

export const CartaPokemon = () => {
	return (
<Card className="cartas" >
        <Card.Img
          variant="top"
          src="https://nintendo.pe/wp-content/uploads/2018/05/f51d08be05919290355ac004cdd5c2d6.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex">
          <Button className="boton">Learn more!</Button>
          <Button className="botonpoke"> 
<img className="pokeball"  
          src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon6.png"
        /> </Button>
        </div>
        </Card.Body>
      </Card>
      )};