import React, { useState } from 'react'

import "./FrecuenteCard.scss"

const FrecuenteCard = ({ frecuente }) => {

    const [open, setOpen] = useState(false)
    //const { pregunta, respuesta } = props.frecuente


    return (
        <>
            <div className="frecuente_card" onClick={() => setOpen(!open)}>
                <h3 className="frecuente_card_title" > {frecuente.pregunta}</h3>
                {open
                    ? <h3 className="frecuente_response">{frecuente.respuesta}</h3>
                    : null}
            </div>
        </>
    )
}
export default FrecuenteCard


/*
  const questionsArr = [
        {
            question: "¿Cuando se puede hacer el check-in y el check-out en Social Hostel trindade?",
            answer: [
                "El horario de check-in de Social Hostel Trindade es a partir de las 14:00.", "El check-out es hasta las 11:00."
            ]
        },
        {
            question: "¿Cuanto cuesta una estadía en Social Hostel Trindade?",
            answer: [
                "Los precios varian segun las fechas del año.",
                "Por favor ingrese en TripAdvisor.com o Booking.com para consultar los precios para las fechas de su viaje.",
                "(Links en la parte de abajo)"
            ]
        }, {
            question: "¿Qué tipo de desayuno se sirve en el Social Hostel Trindade?",
            answer: [
                "Se puede disfrutar de una amplia variedad de opciones para el desayuno.",
                " Los huespedes califican con 8.5+ nuestros desayunos.",
                "las opciones son:",
                "1.Continetal",
                "2.Rustico",
                "3.Light"
            ]
        }
    ]*/