import React, { useContext, useEffect } from 'react'
import Layout from "./components/Layout"
import useFrecuente from "./hooks/useFrecuente"
import FrecuenteCard from './components/FrecuenteCard/FrecuenteCard'
import Header from "./components/Header"
import BookContent from './components/BookContent/BookContent'
import * as Global from "../context/GlobalContext"


import "./styles/FAQ.scss"

const FAQ = () => {

    const dispatch = useContext(Global.GlobalDispatch)

    useEffect(() => {
        dispatch({ type: "TOOGLE_PAGE_TITLE", payload: "Frequently Ask Questions" })
    }, [dispatch])

    const frecuente = useFrecuente()
    return (
        <Layout>
            <div className="frecuente_div">
                {frecuente.map(el => <FrecuenteCard key={el.id} frecuente={el} />)}
            </div>
            <Header title="Reservas" />
            <BookContent />
        </Layout>
    )
}

export default FAQ
