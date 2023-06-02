import React from "react";
import './Carousel.css'
import { useState } from "react";
import Arm from '../../imag/nakr.jpg'
import Rus from '../../imag/asd1.webp'
import Usa from '../../imag/asd2.webp'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

const Carousel = () => {

    const [state, setState] = useState([
        { image: Arm },
        { image: Rus },
        { image: Usa }]);

    const [irakan, setIrakan] = useState([{ image: Arm }])
    const [tiv, setTiv] = useState(1);

    const rightClick = () => {
        { tiv == state.length - 1 ? setTiv(tiv - 2) : setTiv(tiv + 1) };
        setIrakan([state[tiv]]);
    }


    const leftClick = () => {
        { tiv == state.length - 3 ? setTiv(tiv + 2) : setTiv(tiv - 1) };
        setIrakan([state[tiv]]);
    }

    return (
        <div className="div_karusel">

            <div className="div_karusel_main">
                <AiOutlineDoubleLeft className="icon_click_left" onClick={leftClick} />
                {irakan.map((element, index) => {
                    return (
                        <img className="img_karusel" key={index} src={element.image} />
                        
                    )
                }
                )}
                <AiOutlineDoubleRight className="icon_click_right" onClick={rightClick} />
            </div>

        </div>
    )
}





export default Carousel;