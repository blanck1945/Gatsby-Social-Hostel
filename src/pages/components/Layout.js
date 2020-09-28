import React, { useContext } from 'react'
import Header from "./Header"
import Helmet from "react-helmet"
import Footer from "./Footer"
import * as Global from "../../context/GlobalContext"

import '../../scss/main.scss'

const Layout = (props) => {

    const state = useContext(Global.GlobalContextState)
    return (
        <>
            <Helmet>
                <title>Social Hostel Trindade</title>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header title={state.pageTitle} />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
