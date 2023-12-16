import React from 'react'
import { DeleteOutline } from '@mui/icons-material';
import "./Cart.scss";
export const Cart = ()=> {
    const data=[
        {
            id:1,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            desc:"Half-Sleeve Blck T-shirt",
            isNew:true,
            oldPrice:2000,
            price:1700,

        },
        {
            id:2,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922524/pexels-photo-12922524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            desc:"Half-Sleeve Blck T-shirt",
            isNew:true,
            oldPrice:2000,
            price:1700,

        },
        {
            id:3,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922524/pexels-photo-12922524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            desc:"Half-Sleeve Blck T-shirt",
            isNew:true,
            oldPrice:2000,
            price:1700,
        }
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className='item' key ={item.id}>
                <img src={item.img} alt="" />
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>1 *${item.price}</div>
                </div>
                <DeleteOutline className='delte'/>
            </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
  );
};
