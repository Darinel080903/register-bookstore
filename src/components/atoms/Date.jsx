import { useState } from 'react'
import '/home/darinel/Escritorio/Darinel/React/Practica-04/src/css/Checkbox.css'

function Date(props) {
    return(
        <form>
            <label>Date of publication:
            <input type="date" name="name" />
            </label>
        </form>
    ) 
}

export default Date;