import React from "react";
import '../App.css'

export default function Header(){
    return(
        <header className="header">
            <img src="/images/trollface.png" className="header--image" />
            <h2 className="header--title">MEME generator</h2>
            <h4 className="header-project">By FunnyMan</h4>
        </header>
    )
}