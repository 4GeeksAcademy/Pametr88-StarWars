import React from "react";
import "../../styles/home.css";
import { Card } from "../component/Card"
import { Planet } from "../component/Planet";
import { Films } from "../component/Films";

export const Home = () => (
	<div className="container">
		<div className="accordion">
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" id="title">
						Characters
					</button>
				</h1>
				<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Card/></div>
				</div>
			</div>
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" id="title">
						Planets
					</button>
				</h1>
				<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Planet/></div>
				</div>
			</div>
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" id="title">
						Films
					</button>
				</h1>
				<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Films/></div>
				</div>
			</div>
			<div className="accordion-item">
				<h1 className="accordion-header">
					<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" id="title">
						Characters
					</button>
				</h1>
				<div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
					<div className="accordion-body"><Card/></div>
				</div>
			</div>
		</div>
		
	</div>
);
