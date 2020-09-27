import React, { useContext, useEffect } from 'react'
import Layout from "../components/layout"
import BookContent from "../components/BookContent/BookContent"
import Header from "../components/header"
import AboutContent from "../components/AboutContent/AboutContent"
import * as Global from "../context/GlobalContext"
import { useStaticQuery, graphql } from "gatsby"


import "./styles/About.scss"

const About = () => {

  const { allDatoCmsPagina } = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: {eq: "Acerca"}}){
          nodes {
            titulo,
            contenido,
            texto1,
            texto2,
            imagen {
              fluid(maxWidth: 600){
                ...GatsbyDatoCmsFluid
              }
            }
            imagen2 {
              fluid(maxWidth: 600){
                ...GatsbyDatoCmsFluid
              }
            }
            imagen3 {
              fluid(maxWidth: 900){
                ...GatsbyDatoCmsFluid
              }
            }
            logo {
              fluid(maxWidth: 900){
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
        }
    `)

  const { titulo, contenido, imagen, imagen2 } = allDatoCmsPagina.nodes[0]

  const dispatch = useContext(Global.GlobalDispatch)


  useEffect(() => {
    dispatch({ type: "TOOGLE_PAGE_TITLE", payload: titulo })
  }, [dispatch, titulo])

  return (
    <Layout>
      <AboutContent contenido={contenido} imagen={imagen.fluid} imagen2={imagen2.fluid} />
      <Header title="Reservas" />
      <BookContent />
    </Layout>
  )
}

export default About
