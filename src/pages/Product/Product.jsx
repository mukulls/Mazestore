import React, { useState } from 'react'
import "./Product.scss";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { FavoriteBorder } from '@mui/icons-material';
import { Balance } from '@mui/icons-material';
const Product = () => {
  const [selectedImg,setSelectedImg]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const images=[
    'https://images.pexels.com/photos/19437845/pexels-photo-19437845/free-photo-of-photo-of-a-man-holding-up-his-fists.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/19437841/pexels-photo-19437841/free-photo-of-man-wearing-a-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ]
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className='right'>
        <h1>Title</h1>
        <span>2000</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores officia quidem modi voluptatum! Debitis reprehenderit velit, voluptate omnis sit non maxime accusantium aspernatur animi laboriosam assumenda doloribus dolores obcaecati!</p>
      <div className='quantity'>
        <button onClick ={()=>setQuantity(prev=>prev===1?1: prev-1)}>-</button>
        {quantity}
        <button onClick ={()=>setQuantity(prev=>prev+1)}>+</button>
      </div>
      <button className='add'>
        <AddShoppingCart/> ADD TO CART
      </button>
      <div className='link'>
        <div className='item'>
          <FavoriteBorder/> ADD TO WISH LIST
        </div>
        <div className='item'>
          <Balance/> ADD TO COMPARE
        </div>
      </div>
      <div className='info'>
        <span>Vandor:</span>
        <span>Product Type:</span>
        <span>Tag:</span>
      </div>
      <hr />
      <div className='details'>
        <span>DESCRIPTION</span>
        <hr />
        <span>ADDITIONAL INFORMATION</span>
        <hr />
        <span>FAQ</span>
      </div>
      </div>
      </div>
  )
}
export default Product