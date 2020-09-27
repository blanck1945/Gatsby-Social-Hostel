import React from 'react'
import "./styles/BuyComp.scss"

const BuyComp = () => {
    return (
        <div className="book_comp">
            <p className="book_pa">Reserva tu habitación mediante cualquiera de las plataformas.</p>
            <div className="book_img_div">
                <a href="https://www.booking.com/hotel/br/social-hostel-trindade.es-ar.html" className="book_link">
                    <img src="https://www.forobebe.com/wordpress/wp-content/uploads/2017/04/booking-logo.png" alt="book1" className="book_img" />
                </a>
                <a href="https://www.tripadvisor.com.ar/Hotel_Review-g4007697-d19359149-Reviews-Social_Hostel_Trindade-Trindade_Paraty_State_of_Rio_de_Janeiro.html" className="book_link">
                    <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alto="book2" className="book_img" />
                </a>
                <a href="https://www.agoda.com/es-es/social-hostel-trindade/hotel/paraty-br.html" className="book_link">
                    <img src="https://images.squarespace-cdn.com/content/v1/5c1b9b60b10598f4780de648/1546394165536-ZP0537SKX5HWYS8GDW9G/ke17ZwdGBToddI8pDm48kEhRb-mGDiEi0xC18_AR20gUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcIhmhaf0_y3jP90sctjPbyJl_LgGHVX5eJAayYAVUQeLJuPsDj2XpL8L_ZrvpLsfK/agoda-logo-flat.png?format=2500w" alto="book2" className="book_img" />
                </a>
            </div>
        </div>
    )
}

export default BuyComp

