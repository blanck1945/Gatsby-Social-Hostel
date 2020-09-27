import React from 'react'
import SocialBox from "./FooterComp/SocialBox"

import "./styles/Footer.scss"

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <SocialBox />
            <div className="contact_div">
                <p className="contact_pa">Teléfono: +55 24 99334-5220</p>
                <p className="contact_pa">Email:trindadesocialhostel@gmail.com</p>
            </div>
            <p className="credits">Social Hostel Trindade. Todos los derechos reservados {year}</p>
        </div>
    )
}

export default Footer
