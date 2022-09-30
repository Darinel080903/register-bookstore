import { useState } from 'react'
import '../css/Header.css'

function Header(props) {
    return(
        <div className='Navbar'>
            <div className="blue-bg">
                <img className="imagen-01 alinear-izquierda" 
                src={(`../src/img/imagen-${props.imagen}.png`)}/>
                <h1>REGISTER OF BOOK STORE</h1>
            </div>
        </div>
    )
}

export default Header;