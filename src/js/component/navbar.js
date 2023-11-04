import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxu3dgPb2v4ezDM91oP68dvhKD2WjCYVEpsw&usqp=CAU" alt="Star Wars" width="40" height="30" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="btn-group" role="group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">Dropdown link</a></li>
							<li><a class="dropdown-item" href="#">Dropdown link</a></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
