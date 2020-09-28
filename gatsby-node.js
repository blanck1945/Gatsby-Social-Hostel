exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
    query {
        allDatoCmsHabitacion{
          nodes {
            slug
            }
        }
        }        
    `)

    if (result.errors) {
        reporter.panic('No hubo resultados', result.errors)
    }

    const habitaciones = result.data.allDatoCmsHabitacion.nodes
    console.log(habitaciones)


    habitaciones.forEach(el => {
        actions.createPage({
            path: el.slug,
            component: require.resolve('./src/pages/components/singleHab/SingleHab.js'),
            context: {
                slug: el.slug
            }
        })
    })
}