import React from "react"
import GlobalContext from "./src/context/GlobalContext"

export const wrapRootElement = ({ element }) => {
    return (
        <GlobalContext.GlobalContext >
            {element}
        </GlobalContext.GlobalContext>
    )
}