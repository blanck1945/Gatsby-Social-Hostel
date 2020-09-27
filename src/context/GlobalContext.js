const React = require('react')

const GlobalContextState = React.createContext()
const GlobalDispatch = React.createContext()

const initialState = {
    theme: 'Brazil',
    pageTitle: 'Social Hostel Trindade'
}

const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOOGLE_THEME':
            return {
                ...state,
                theme: state.theme === "Brazil" ? "Argentina" : "Brazil"
            }
        case 'TOOGLE_PAGE_TITLE':
            return {
                ...state,
                pageTitle: action.payload
            }
        default:
            return state
    }
}

const GlobalContext = ({ children }) => {

    const [state, dispatch] = React.useReducer(globalReducer, initialState)

    return (
        <GlobalContextState.Provider value={state}>
            <GlobalDispatch.Provider value={dispatch}>
                {children}
            </GlobalDispatch.Provider>
        </GlobalContextState.Provider>
    )
}

module.exports = {
    GlobalContext,
    GlobalContextState,
    GlobalDispatch
}