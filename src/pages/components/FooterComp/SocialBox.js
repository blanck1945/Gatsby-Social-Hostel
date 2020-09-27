import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import "./styles/SocialBox.scss"

const SocialBox = () => {
    return (
        <div className="social_box">
            <FaFacebook className="icon facebook"
            />
            <AiFillTwitterCircle className="icon twitter" />
            <AiFillInstagram className="icon instagram" />
        </div>
    )
}

export default SocialBox
