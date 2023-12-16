import React from 'react'
import  Card  from '../Cards/Cards';
import './List.scss';
export const List = () => {
    const data=[
        {
            id:1,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            isNew:true,
            oldPrice:2000,
            price:1700,

        },
        {
            id:2,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922524/pexels-photo-12922524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            isNew:true,
            oldPrice:2000,
            price:600,

        },{
            id:3,
            img:'https://images.pexels.com/photos/12922524/pexels-photo-12922524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            isNew:true,
            oldPrice:2000,
            price:3456,

        },{
            id:4,
            img:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            img2:'https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title:"Tshirt",
            isNew:true,
            oldPrice:2000,
            price:1700,

        },
    ]
  return (
    <div className="list">
    {data?.map((item) => <Card item={item} key={item.id} />)}
  </div>
  )
}
