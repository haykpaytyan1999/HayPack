import React from 'react'
import './ArgumentProd.css'
import VideoProd from '../videoProd/VideoProd'
import Material from '../material/Material'


const ArgumentProd = ({ comp, product }) => {

  if (comp === "Parametrs"){
    return(
       <div className='argumentProd'>
      <table className='argTable'>
        {Object.keys(product?.options || {}).map((key) => {
          return (
            <tr className='argTr'>
              <th>{key}</th>
              <td>{product?.options[key]}</td>
            </tr>
          )
        })}
      </table>
    </div>
    )
  }
  if (comp ==="Video"){
    return(
      <VideoProd product={product}/>
    )
  }
  if (comp === "Application")
    return(
      <Material />
    )
  return (
   <>
   </>
  )
}

export default ArgumentProd