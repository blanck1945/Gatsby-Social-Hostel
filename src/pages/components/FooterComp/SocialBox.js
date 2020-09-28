import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import "./styles/SocialBox.scss"

const SocialBox = () => {
    return (
        <div className="social_box">
            <a href="https://www.facebook.com/socialhosteltr/">
                <FaFacebook className="icon facebook" />
            </a>
            <AiFillTwitterCircle className="icon twitter" />
            <a href="https://www.instagram.com/socialhosteltr/">
                <AiFillInstagram className="icon instagram" />
            </a>
        </div>
    )
}

export default SocialBox
