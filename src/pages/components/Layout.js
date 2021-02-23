import React, { useContext } from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import Footer from "./Footer"
import * as Global from "../../context/GlobalContext"

import "../../scss/main.scss"

const Layout = props => {
  const state = useContext(Global.GlobalContextState)
  return (
    <>
      <Helmet>
        <meta
          property="og:image"
          content="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/82061000_148525736571038_585858106387333120_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_ohc=-w1Qj63OqmgAX8aaA25&_nc_ht=scontent-eze1-1.xx&oh=d577c147b765c5653407b7c8f59d52bd&oe=605A2C73"
        />
        <title>Social Hostel Trindade</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header title={state.pageTitle} />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
