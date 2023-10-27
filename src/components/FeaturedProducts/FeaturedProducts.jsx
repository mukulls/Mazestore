import React from 'react'
import './FeaturedProducts.scss';
import Cards from '../Cards/Cards';
const FeaturedProducts = ({type}) => {
    const data=[
        {
            id:1,
            img:"https://images.pexels.com/photos/1833080/pexels-photo-1833080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2:"https://images.pexels.com/photos/1833082/pexels-photo-1833082.jpeg",
            title: "Biker Jacket",
            isNew:true,
            oldPrice:4399,
            price:2399
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/6311390/pexels-photo-6311390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Hoodie",
            isNew:true,
            oldPrice:2499,
            price:1499
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Coat",
            isNew:true,
            oldPrice:5499,
            price:3899
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/15883360/pexels-photo-15883360/free-photo-of-young-man-in-a-trendy-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600",
            title:"Cargo-Pants",
            isNew:true,
            oldPrice:1999,
            price:1199
        }
    ]
  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quis facilis temporibus dolore itaque mollitia eaque, ipsum unde autem tenetur qui, minus neque iste placeat minima delectus eveniet, nulla commodi!
            </p>
        </div>
        <div className='Bottom'>
            {data.map(item=>(
                <Cards item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts