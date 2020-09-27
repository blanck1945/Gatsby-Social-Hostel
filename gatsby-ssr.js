const React = require("react")
const GlobalContext = require("./src/context/GlobalContext")

exports.wrapRootElement = ({ element }) => {
    return (
        <GlobalContext.GlobalContext >
            {element}
        </GlobalContext.GlobalContext>
    )
}