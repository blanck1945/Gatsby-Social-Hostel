import React from 'react'
import Image from "gatsby-image"

import "./AboutContent.scss"

const AboutContent = ({ contenido, imagen, imagen2 }) => {
    console.log(imagen)
    return (
        <div className="about_div">
            <p className="about_text">{contenido}</p>
            <div className="about_img_div">
                <Image fluid={imagen} alt="img1" className="about_img" />
                <Image fluid={imagen2} alt="img1" className="about_img" />
            </div>
        </div>
    )
}

export default AboutContent
