import React, { useEffect, useState } from 'react'
import DisplayRange from '../../component/displayRange/DisplayRange'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/products';

import ProductsOf from '../../component/productsOf/ProductsOf';
import { Helmet } from 'react-helmet';


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
            <Helmet>
                <title>{product?.title}</title>
                <meta name='description' content={product?.description} />
            </Helmet>
            <DisplayRange product={product} />
            <ProductsOf product={product} />

        </>
    )
}

export default Product