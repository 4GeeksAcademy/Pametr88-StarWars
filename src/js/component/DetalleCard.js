import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const DetalleCard = (props) => {
    const { store, actions } = useContext(Context)
    const params = useParams ()
    useEffect(() => {
        actions.loadOnePeople(params.id)
    }, [])
    console.log(store.OneCharacter.properties)
    return (
        <div className="card-container">
            {/* {store.OneCharacter.map((item) => (
                <div key={item.id} className="card" style={{ width: "18rem" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1 <= 17 ? index + 1 == 17 ? 18 : index + 1 : index + 2}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Gender: {item.gender}</p>
                        <p className="card-text">Height: {item.height}</p>
                        <p className="card-text">Hair Color: {item.hair_color}</p>
                    </div>
                </div>
            ))} */}
        </div>
    );
};