import React, { useContext, useEffect } from "react"
import Layout from "./components/Layout"
import BackImage from "./components/BackImage"
import Content from "./components/InicioContent/Cotent"
import Header from "./components/Header"
import RoomContent from "./components/InicioContent/RoomContent"
import CommentContent from "./components/InicioContent/CommentContent"
import { GlobalDispatch } from "../context/GlobalContext"
import BookContent from "./components/BookContent/BookContent"

const IndexPage = () => {

  const dispatch = useContext(GlobalDispatch)

  useEffect(() => {
    dispatch({ type: "TOOGLE_PAGE_TITLE", payload: "Social Hostel Trindade" })
  }, [dispatch])

  return (
    <Layout>
      <BackImage />
      <Header title="Descubre nuestro hostel" />
      <Content />
      <Header title="Nuestras Habitaciones" />
      <RoomContent />
      <Header title="Se Dice..." />
      <CommentContent />
      <Header title="Reservas" />
      <BookContent />
    </Layout>
  )
}



export default IndexPage
