import React, { useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
import {  Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import { Cart } from '../Cart/Cart'
import "./Navbar.scss"
const NAvbar = () => {
  const [open,setOpen]= useState(false)
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
              <div className='item'>
                <img src='/images/ind.png' alt='' width={"28px"} height={"25px"} />
                <MdOutlineKeyboardArrowDown/>
              </div>
              <div className='item'> 
                <span>INR</span>
                <MdOutlineKeyboardArrowDown/>
              </div>
              <div className='item'>
                < Link className='link' to="/products/1">Women</Link>
              </div>
              <div className='item'>
                < Link className='link' to="/products/1">Men</ Link>
              </div>
              <div className='item'>
                < Link className='link' to="/products/1">Kids</ Link>
              </div>
              </div>

            <div className='center'>
              < Link className='link' to="/">MAZESTORE</ Link>
            </div>
            <div className='right'>
              <div className='item'>
              < Link className='link' to="/">Homepage</ Link>
              </div>
              <div className='item'>
                < Link className='link' to="/">About</ Link>
              </div>
              <div className='item'>
                < Link className='link' to="/">Contact</ Link>
              </div>
              <div className='item'>
                < Link className='link' to="/">Stores</ Link>
              </div>
              <div className='icons'>
                <AiOutlineSearch/>
                <AiOutlineHeart/>
                <BsPerson/>
                <div className='cartIcon' onClick={()=>setOpen(!open)}>
                  <AiOutlineShoppingCart/>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
          {open && <Cart/>}
        </div>
  )
}

export default NAvbar