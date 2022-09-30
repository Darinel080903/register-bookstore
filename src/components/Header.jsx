import { useState } from 'react'
import '../css/Header.css'
import Imagen from '../img/imagen-02.png'

function Header(props) {
    return(
        <div className='Navbar'>
            <div className="blue-bg">
                <img className="imagen-01 alinear-izquierda" 
                src={Imagen}/>
                <h1>REGISTER OF BOOK STORE</h1>
            </div>
        </div>
    )
}

export default Header;