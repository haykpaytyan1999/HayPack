import React from 'react'
import './ProdNav.css'
import './prodNavMedia.css'


const ProdNav = ({setComp}) => {
   const handelChangeComp = (e) =>{
    setComp(e.target.name)

   }
    return (
        <div className='prodNav'>
            <button className='nav_but' name='Parametrs' onClick={handelChangeComp}>Պարամետր</button>
            <button className='nav_but' name='Video' onClick={handelChangeComp}>Տեսանյութ</button>
            <button className='nav_but' name='Application' onClick={handelChangeComp}>Արտադրում է</button>
        </div>
    )
}

export default ProdNav