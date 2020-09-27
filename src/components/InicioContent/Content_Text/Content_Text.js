import React from 'react'

import "./Content_Text.scss"

const Content_Text = ({ titulo, contenido, arr }) => {

    return (
        <div className="text_con">
            <h2 className="text_head">{titulo}</h2>
            {arr === true
                ?
                <div className="content_box" >
                    {contenido.split("/").map(el =>
                        <p className="text_pa_in" key={el}>{el}</p>
                    )}
                </div>
                : <p className="text_pa">{contenido}</p>
            }
        </div>
    )
}

export default Content_Text
