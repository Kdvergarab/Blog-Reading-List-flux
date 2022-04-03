import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css"
import { Card, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const CartaPokemon = ({ nombre, imagen, tipo, id}) => {
  const { store, actions } = useContext(Context);
	return (
<Card className="cartas" >
        <Card.Img
          variant="top"
          src={imagen}
        />
        <Card.Body>
          <Card.Title>{nombre.toUpperCase()}</Card.Title>
          <Card.Text>
           Este pokemon es de tipo "{tipo.map((e, i) => {
             return e.type.name.toUpperCase()
           })}"
          </Card.Text>
          <div className="d-flex">
            <Link to={"/single/" + id}>
          <Button className="boton">Learn more!</Button>
          </Link>
          <Button className="botonpoke" onClick={() => {
            actions.agregarFavoritos(id)     
          
          }}> 
<img className="pokeball"  
          src="https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon6.png"
        /> </Button>
        </div>
        </Card.Body>
      </Card>
      )};