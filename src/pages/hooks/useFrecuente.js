import { graphql, useStaticQuery } from "gatsby"

const useFrecuente = () => {
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
  return data.allDatoCmsFrecuente.nodes.map(el => ({
    id: el.id,
    question: el.pregunta,
    answer: el.respuesta,
  }))
}

export default useFrecuente