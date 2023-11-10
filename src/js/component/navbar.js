import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 container" id="navb">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu3dgPb2v4ezDM91oP68dvhKD2WjCYVEpsw&usqp=CAU" alt="Star Wars" width="40" height="30" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group" role="group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><Link className="dropdown-item" to="#">Dropdown link</Link></li>
							<li><Link className="dropdown-item" to="#">Dropdown link</Link></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
