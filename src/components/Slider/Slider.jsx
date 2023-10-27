import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import "./Slider.scss";
const Slider= ()=>{
  const[currentSlide, setCurrentSlide] = useState(0);
    const data=[
       "https://images.pexels.com/photos/7081113/pexels-photo-7081113.jpeg",
       "https://images.pexels.com/photos/4672559/pexels-photo-4672559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5119917/pexels-photo-5119917.jpeg"
    ];
    const prevSlide=()=>{
      setCurrentSlide(currentSlide === 0?2 : (prev) => prev -1)
    }
    const nextSlide=()=>{
      setCurrentSlide(currentSlide === 2?0 : (prev) => prev +1)
    }

    return (
      <div className="slider">
        <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
        </div>
<div className="icons-container">
  <div className="icon" onClick={prevSlide}>
    <BsFillArrowLeftCircleFill />
  </div>
  <div className="icon" onClick={nextSlide}>
    <BsFillArrowRightCircleFill />
  </div>
</div>
</div>

    )
}

export default Slider