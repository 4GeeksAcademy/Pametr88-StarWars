import React from "react";

export const Card = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary"><i class="fa-regular fa-heart" style="color: #ffff00;"></i></a>
                    </div>
                </div>
        </div>        
    );
};