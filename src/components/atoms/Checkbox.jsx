import { useState } from 'react'
import '/home/darinel/Escritorio/Darinel/React/Practica-04/src/css/Checkbox.css'

function Checkbox(props) {
    return(
        <form className='flex'>
            
            <l1>
                <label>accion:
                <input type="checkbox" name="name" />
                </label>
            </l1>
            

            <li>
                <label>fantasy:
                <input type="checkbox" name="name" />
                </label>
            </li>

            <li>
                <label>Adventure:
                <input type="checkbox" name="name" />
                </label>
            </li>


            <li>
                <label>Other:
                <input type="checkbox" name="name" />
                </label>
            </li>
        </form>
    ) 
}

export default Checkbox;