import React, { useEffect, useState } from 'react'
import DisplayRange from '../../component/displayRange/DisplayRange'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';

import ProductsOf from '../../component/productsOf/ProductsOf';


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState();


    useEffect(() => {
        getProduct({ id }).then(res => {
            setProduct(res)
        })
    }, [id])
    return (
        <>
            <DisplayRange product={product} />
            <ProductsOf product={product} />
            
        </>
    )
}

export default Product