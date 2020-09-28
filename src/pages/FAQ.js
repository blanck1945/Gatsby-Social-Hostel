import React, { useContext, useEffect } from 'react'
import Layout from "./components/Layout"
//import useFrecuente from "../hooks/useFrecuente"
import { graphql, useStaticQuery } from "gatsby"
import FrecuenteCard from './components/FrecuenteCard/FrecuenteCard'
import Header from "./components/Header"
import BookContent from './components/BookContent/BookContent'
import { GlobalDispatch } from "../context/GlobalContext"


import "./styles/FAQ.scss"

const FAQ = () => {

    const dispatch = useContext(GlobalDispatch)

    useEffect(() => {
        dispatch({ type: "TOOGLE_PAGE_TITLE", payload: "Frequently Ask Questions" })
    }, [dispatch])

    const data = useStaticQuery(graphql`
    query {
        allDatoCmsFrecuente{
          nodes {
            id,
            pregunta,
            respuesta
          }
        }
        }
    `)

    return (
        <Layout>
            <div className="frecuente_div">
                {data.allDatoCmsFrecuente.nodes.map(el => <FrecuenteCard key={el.id} frecuente={el} />)}
            </div>
            <Header title="Reservas" />
            <BookContent />
        </Layout>
    )
}

export default FAQ
