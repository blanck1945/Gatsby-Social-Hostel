import { graphql, useStaticQuery } from "gatsby"

const useComentario = () => {
  const data = useStaticQuery(graphql`
    query {
        allDatoCmsComentario{
          nodes {
            id,
            nombre,
            pais,
            texto,
            puntaje
          }
        }
        }
    `)
  return data.allDatoCmsComentario.nodes.map(el => ({
    id: el.id,
    nombre: el.nombre,
    pais: el.pais,
    texto: el.texto,
    puntaje: el.puntaje
  }))
}

export default useComentario