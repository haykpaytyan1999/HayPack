import React, { useState } from 'react'
import './DisplayRange.css'
import './DisplayMedia.css'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

const DisplayRange = ({product}) => {
  const [tiv, setTiv] = useState(0);


  const rightClick = () => {
    tiv === product?.img.length - 1 ? setTiv(tiv - 1) : setTiv(tiv + 1);
  }

  const leftClick = () => {
    tiv === product?.img.length - 2 ? setTiv(tiv + 1) : setTiv(tiv - 1);
  }

  return (
    <div className='div_displayRange'>
      <div className='displayRange_img'>
        <AiOutlineDoubleLeft className="icon_left" onClick={leftClick} />
        {product?.img ? <img src={product?.img[tiv]} alt="" /> : null}
        <AiOutlineDoubleRight className="icon_right" onClick={rightClick} />
      </div>
      <div className='div_details'>
        <h1>Նկարագրություն</h1>
        <p>{product?.description}</p>
        <h2>Երաշխիքի մասին տեղեկություն`</h2>
        <p>{product?.guarantee}</p>
      </div>
    </div>
  )
}

export default DisplayRange