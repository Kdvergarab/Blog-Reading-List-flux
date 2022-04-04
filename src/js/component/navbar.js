import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import {Nav, NavDropdown} from 'react-bootstrap'
import { Fav } from "./fav";

export const Navbar = () => {
	return (

		<nav className="navbar navbar-light header mb-3">
			<Link to="/" >
				<span className="navbar-brand mb-0 h1">
				<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="PokéAPI"/>
				</span>
			</Link>
			<div className="ml-auto botonf">
		    <NavDropdown title="" id="nav-dropdown" className="botonfavoritos">
        <NavDropdown.Item eventKey="4.1">
			<Fav />
		</NavDropdown.Item>

      </NavDropdown>
				
				
			</div>
			<div className="d-flex mt-2">
<img className="imagenn2 container-fluid"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95d6f9ec-7667-4644-931f-931b848f9998/dd7cplm-ea635a47-b342-433f-af97-b0530b9aedca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1ZDZmOWVjLTc2NjctNDY0NC05MzFmLTkzMWI4NDhmOTk5OFwvZGQ3Y3BsbS1lYTYzNWE0Ny1iMzQyLTQzM2YtYWY5Ny1iMDUzMGI5YWVkY2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9GDQASbysxp3pZ_ZSoRZMJLoI5AppMoMlhrwbF5eKNo"
        />
<img className="imagenn2"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95d6f9ec-7667-4644-931f-931b848f9998/dd7cplm-ea635a47-b342-433f-af97-b0530b9aedca.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1ZDZmOWVjLTc2NjctNDY0NC05MzFmLTkzMWI4NDhmOTk5OFwvZGQ3Y3BsbS1lYTYzNWE0Ny1iMzQyLTQzM2YtYWY5Ny1iMDUzMGI5YWVkY2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9GDQASbysxp3pZ_ZSoRZMJLoI5AppMoMlhrwbF5eKNo"
        />

</div>	
		</nav>
		

	);
};
