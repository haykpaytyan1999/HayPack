import React from 'react'
import './Footer.css'
import './FooterMedia.css'
import footerImg from '../../imag/haypak.png'
import QRinst from '../../imag/qrinst.png'
import QRfac from '../../imag/qrfac.png'

const Footer = () => {
    return (
        <div className='footer_img'>
            <div className='footer_logo'>
                <img src={footerImg} alt="" />
            </div>
            <div className='footer_main'>
                <div className='contactUs'>
                    <h3>ԿԱՊ ՄԵԶ ՀԵՏ</h3>
                    <p>Կոնտակտային անձ՝ Ջեյսոն</p>
                    <p>Էլ.փոստ՝  [email protected]</p>
                    <p>Հեռ.՝  +8617388602385</p>
                    <p>Հասցե՝ C7 շենք</p>
                </div>
                <div className='footerQR'>
                    <img src={QRinst} alt="" />
                    <img src={QRfac} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer