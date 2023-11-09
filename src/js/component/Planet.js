import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Planet = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.loadSomePlanet()
    }, [])
    console.log(store.Planets)
    return (
        <div className="card-container">
            {store.Planets.map((item, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">.</p>
                        <p className="card-text">.</p>
                        <p className="card-text">.</p>
                        <div>
                            <Link to="#" className="btn btn-outline-primary">Learn more!</Link>
                            <Link to="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart" style={{ color: "#ffff00" }}></i></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
