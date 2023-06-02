import React, { useEffect, useState } from 'react'
import './Material.css'
import { getProduct } from '../../api/products'
import { useParams } from 'react-router-dom';

const Material = () => {

    const [product, setProduct] = useState();
    const { id } = useParams()

    useEffect(() => {
        getProduct({ id }).then(res => {
            setProduct(res)
        })
    }, [id])

    return (
        <>
            <div className='material_main'>
                {product && product.materialImg?.map((item, i) => <div key={i} className='div_img'>
                    <img src={item} alt="" />
                </div>)}
            </div>
        </>
    )
}

export default Material