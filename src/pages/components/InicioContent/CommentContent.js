import React from 'react'
import useComentario from "../../../hooks/useComentario"
import CommentCard from "./CommentComp/CommentCard"

import "./CommentContent.scss"

const CommentContent = () => {


    const comentario = useComentario()
    return (
        <div className="comment_div">
            {comentario.map((el, index) => <CommentCard comentario={el} key={index} />)}
        </div>
    )
}

export default CommentContent
