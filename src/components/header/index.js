import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header(){
    return(
        <header>

            <Link to="/" className="logo">Prime Flix</Link>
            <Link to="/favoritos" className="meusfilmes">Meus Filmes</Link>

        </header>
    );

}

export default Header;