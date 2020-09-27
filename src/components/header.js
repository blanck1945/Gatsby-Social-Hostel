import React from 'react'
import Navegation from "./Navegation"
import { Link } from "gatsby"

import "./styles/Header.scss"


const header = ({ title }) => {
    return (
        <header>
            <div className="nav">
                <Link to="/" className="nav_header linkHead">{title}</Link>
                <script src="https://kit.fontawesome.com/493af9935f.js" crossorigin="anonymous"></script>
                <Navegation />
            </div>
        </header>
    )
}

export default header
