import React, { useContext, useEffect } from 'react'
import { graphql } from "gatsby"
import Layout from "../Layout"
import Image from "gatsby-image"
import * as Global from "../../../context/GlobalContext"

import "./SingleHab.scss"

export const query = graphql`
query($slug: String){
    allDatoCmsHabitacion(filter: {slug: {eq: $slug}}){
      nodes {
        titulo,
        contenido,
        id,
        imagen {
        fluid(maxWidth:1200) {
          ...GatsbyDatoCmsFluid
        }
      }
        }
    }
    }
`

const SingleHab = ({ data }) => {
  const { titulo, contenido, imagen } = data.allDatoCmsHabitacion.nodes[0]
  const dispatch = useContext(Global.GlobalDispatch)

  useEffect(() => {
    dispatch({ type: "TOOGLE_PAGE_TITLE", payload: titulo })
  }, [dispatch, titulo])

  return (
    <Layout>
      <div className="single_div">
        <h1 className="single_text">{titulo}</h1>
        <p className="single_pa">{contenido}</p>
        <Image fluid={imagen.fluid} className="single_img" />
      </div>
    </Layout>
  )
}

export default SingleHab
