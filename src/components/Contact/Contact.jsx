import React from 'react'
import "./Contact.scss";
import {BsFacebook} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import {BiLogoGoogle} from "react-icons/bi";
import {FaXTwitter} from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your e-mail...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <BsFacebook/>
                <BiLogoGoogle/>
                <GrInstagram/>
                <FaXTwitter/>
            </div>
        </div>
    </div>
  )
}

export default Contact