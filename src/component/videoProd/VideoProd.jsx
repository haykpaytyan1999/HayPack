import React from 'react'
import './VideoProd.css'


const VideoProd = ({product}) => {

  

  return (
    <div className='videoProd_main'>
      <div className='div_video'>
        <video width="750" height="500" controls  >
          <source src={product?.video} type="video/webm" />
        </video>
      </div>

    </div>
  )
}

export default VideoProd