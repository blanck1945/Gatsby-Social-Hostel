import React from "react"
import * as Global from "./src/context/GlobalContext"

export const wrapRootElement = ({ element }) => {
    return (
        <Global.GlobalContext >
            {element}
        </Global.GlobalContext>
    )
}