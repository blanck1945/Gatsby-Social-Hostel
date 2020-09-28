import React from 'react'

import "./CommentCard.scss"

const CommentCard = ({ comentario }) => {


    return (
        <div className="comment_card">
            <div className="comment_up">
                <h2 className="card_name -">{comentario !== undefined ? comentario.nombre : "nombre comentario"}</h2>
                <h3 className="card_country">{comentario !== undefined ? comentario.pais : "pais comentarios"}</h3>
            </div>
            <p className="card_text">{comentario !== undefined ? comentario.texto : "texto comentario"}</p>
            <div className="comment_down">
                <h4 className="puntaje_text">Puntaje:</h4>
                <h3 className="card_score">{comentario !== undefined ? comentario.puntaje : "puntaje comentario"}<span className="puntaje_span">/10</span></h3>
            </div>
        </div>
    )
}

export default CommentCard
