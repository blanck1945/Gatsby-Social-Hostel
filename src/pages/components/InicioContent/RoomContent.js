import React from 'react'
import HabitacionDis from "./habitacionesDis/HabitacionDis"
import useHabitacion from "../../../hooks/useHabitacion"

import "./RoomContent.scss"

const RoomContent = () => {

    const habitaciones = useHabitacion()

    return (
        <div className="room_box">
            {habitaciones.map((el, index) => <HabitacionDis key={index} data={el} />)}
        </div>
    )
}

export default RoomContent
