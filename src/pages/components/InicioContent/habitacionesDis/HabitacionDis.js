import React from 'react'
import Image from "gatsby-image"
import { Link } from 'gatsby'

import "./HabitacioneDis.scss"

const HabitacionDis = ({ data }) => {


    return (
        <div className="habitacion_card">
            <Image fluid={data !== undefined ? data.imagen.fluid : "../../../../images/main.jpg"} className="habitacion_image" />
            <div className="habitacion_box">
                <h3 className="habitacion_text">{data !== undefined ? data.titulo : "Titulo"}</h3>
                <p className="habitacion_pa">{data !== undefined ? data.contenido : "Contenido"}</p>
                <Link to={data !== undefined ? data.slug : "/"} className="general_btn">
                    Entrar
                </Link>
            </div>
        </div>
    )
}

export default HabitacionDis