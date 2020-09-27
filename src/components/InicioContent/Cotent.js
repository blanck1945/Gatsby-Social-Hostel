import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Content_Text from "./Content_Text/Content_Text"
import "./Content.scss"

const Content = () => {

  const { allDatoCmsPagina } = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: {slug: {eq: "inicio"}}){
          nodes {
            titulo
            contenido
            contenido2
            contenido3
            texto1
            texto2
            texto3
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
        }
    `)

  const { contenido, contenido2, contenido3, imagen, texto1, texto2, texto3 } = allDatoCmsPagina.nodes[0]

  return (
    <div className="content_div">
      <div className="content_center">
        <div className="content_text">
          <Content_Text titulo={texto1} contenido={contenido} />
          <Content_Text titulo={texto2} contenido={contenido2} />
          <Content_Text titulo={texto3} contenido={contenido3} arr={true} />
        </div>
        <div className="image_box">
          <Img fluid={imagen.fluid} className="cmsImage" alt="img1" />
        </div>
      </div>
    </div>
  )
}

export default Content

/* <div className="content_center">
        <div className="content_text">

        </div>
      </div>*/
