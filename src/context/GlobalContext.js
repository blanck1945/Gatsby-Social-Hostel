const React = require('react')

export const GlobalContextState = React.createContext()
export const GlobalDispatch = React.createContext()

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

export const GlobalContext = ({ children }) => {

    const [state, dispatch] = React.useReducer(globalReducer, initialState)

    return (
        <GlobalContextState.Provider value={state}>
            <GlobalDispatch.Provider value={dispatch}>
                {children}
            </GlobalDispatch.Provider>
        </GlobalContextState.Provider>
    )
}
