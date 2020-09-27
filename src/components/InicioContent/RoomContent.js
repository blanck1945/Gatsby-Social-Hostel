import React from 'react'
import HabitacionDis from "./habitacionesDis/HabitacionDis"

import "./RoomContent.scss"

const RoomContent = ({ data }) => {
    return (
        <div className="room_box">
            {data.map((el, index) => <HabitacionDis key={index} data={el} />)}
        </div>
    )
}

export default RoomContent
