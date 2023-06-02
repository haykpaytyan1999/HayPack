import React, { useEffect, useState } from 'react'
import './ProductsOf.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';
import ProdNav from '../prodNav/ProdNav';
import ArgumentProd from '../argumentProd/ArgumentProd';

const ProductsOf = () => {

  const { id } = useParams()
  const [product, setProduct] = useState();
  const [comp, setComp] =useState("Parametrs")


  useEffect(() => {
    getProduct({ id }).then(res => {
      setProduct(res)
    })
  }, [id])


  return (
    <div className='productsMain'>
      <ProdNav setComp={setComp}/>
      <ArgumentProd comp={comp} product={product} />
    </div>
  )
}

export default ProductsOf;