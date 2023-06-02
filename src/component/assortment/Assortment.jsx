import React, { useEffect, useState } from 'react'
import './Assortment.css'
import { getProducts } from '../../api/products';
import { Link } from 'react-router-dom';

const Assortment = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts().then(res => {
            setProducts(res)
        })
    }, [])

    return (
        <div className='div_assortment'>
            {products.map((item, i) => (

                <div key={i} className='item'>
                    <div className='assortment_img'>
                        <img src={item.img[0]} alt="" />
                    </div>
                    <p className='assortment_title'>{item.title}</p>
                    <div className='div_button'>
                        <Link to={`/product/${item.id}`} className='link_but' ><button className='assortment_button'>Տեսնել ավելին</button></Link>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Assortment