import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from "gatsby-background-image"

import "./styles/Image.scss"
const Image = () => {

  const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "house.jpg" }) {
          sharp:childImageSharp {
            fluid{
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)

  return (

    <BackgroundImage tag="section" className="image" fluid={image.sharp.fluid}>
      <div className="image_con">
        <h2 className="image_head">Bienvenido a Social Hostel Trindade</h2>
        <p className="image_p">El mejor hostel para tus vacaciones</p>
      </div>
    </BackgroundImage>
  )

}

export default Image
