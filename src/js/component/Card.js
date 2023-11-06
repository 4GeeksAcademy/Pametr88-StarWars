import React,{useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = () => {
    const {store,actions}=useContext(Context)
    useEffect(()=>{
        actions.loadSomePeople()
    },[])
    console.log(store.Character)
    return (
        <div>
            {store.Character.map((item,index)=>{            
            <div key={index} className="card" style={{width: "18rem"}}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        <Link to="#" className="btn btn-primary"><i className="fa-regular fa-heart" style={{color: "#ffff00"}}></i></Link>
                        </div>
                    </div>
            </div> 
        })}
        </div>       
    );
};