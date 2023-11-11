import React from "react";
import { Link } from "react-router-dom";
import pikachu from '../assets/imgs/pikachuhome.svg'
import '../App.css'

const Home = () =>{
    return(
        <div className="homepage">
            <h1>Bienvenido maestro pokemón </h1>
            <img src={pikachu} className="pikachuhome" alt="" />
            <Link to='/pokemones'>Volver a la lista de Pokemones</Link>
        </div>
    )
}

export default Home
