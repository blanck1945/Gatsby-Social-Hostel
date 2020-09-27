import React from 'react'

import "./CommentCard.scss"

const CommentCard = ({ comentario }) => {

    const { nombre, texto, puntaje, pais } = comentario

    return (
        <div className="comment_card">
            <div className="comment_up">
                <h2 className="card_name -">{nombre}</h2>
                <h3 className="card_country">{pais}</h3>
            </div>
            <p className="card_text">{texto}</p>
            <div className="comment_down">
                <h4 className="puntaje_text">Puntaje:</h4>
                <h3 className="card_score">{puntaje}<span className="puntaje_span">/10</span></h3>
            </div>
        </div>
    )
}

export default CommentCard
