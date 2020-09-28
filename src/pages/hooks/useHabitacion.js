import { graphql, useStaticQuery } from "gatsby"

const useHabitacion = () => {
  const data = useStaticQuery(graphql`
    query {
        allDatoCmsHabitacion{
          nodes {
            id,
            titulo,
            slug,
            contenido,
            imagen {
              fluid (maxWidth: 1200) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
        }
    `)
  return data.allDatoCmsHabitacion.nodes.map(el => ({
    titulo: el.titulo,
    id: el.id,
    contenido: el.contenido,
    imagen: el.imagen,
    slug: el.slug,
  }))

}

export default useHabitacion;