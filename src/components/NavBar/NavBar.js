/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {

    return (
        <nav className="main-nav">
            <div>
                <h1>GUITAR CHENTER</h1>
                <button>GUITARRAS</button>
                <button>BAJOS</button>
                <button>BATERIAS</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;