import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card"

export const Home = () => (
	<div className="container">
		<div className="accordion accordion-flush" id="accordionFlushExample">
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
						Characters
					</button>
				</h1>
				<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Card/></div>
				</div>
			</div>
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
						Planets
					</button>
				</h1>
				<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body">tent.</div>
				</div>
			</div>
		</div>
		
	</div>
);
