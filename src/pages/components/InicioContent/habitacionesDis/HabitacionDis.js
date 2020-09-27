import React from 'react'
import Image from "gatsby-image"
import { Link } from 'gatsby'

import "./HabitacioneDis.scss"

const HabitacionDis = ({ data }) => {

    const { titulo, contenido, imagen, slug } = data

    return (
        <div className="habitacion_card">
            <Image fluid={imagen.fluid} className="habitacion_image" />
            <div className="habitacion_box">
                <h3 className="habitacion_text">{titulo}</h3>
                <p className="habitacion_pa">{contenido}</p>
                <Link to={slug} className="general_btn">
                    Entrar
                </Link>
            </div>
        </div>
    )
}

export default HabitacionDis