import React from 'react'
import { Link } from "gatsby"

import "./styles/NavigationStyle.scss"

const Navegation = () => {
    return (
        <div className="link_box">
            <Link to="/" className="link" activeClassName="active">
                Inicio
            </Link>
            <Link to="/About" className="link" activeClassName="active">
                Acerca de..
            </Link>
            <Link to="/FAQ" className="link" activeClassName="active">
                FAQ
            </Link>
        </div>
    )
}

export default Navegation
