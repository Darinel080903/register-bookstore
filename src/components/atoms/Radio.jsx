import '/home/darinel/Escritorio/Darinel/React/Practica-04/src/css/Radio.css'

function Radio(props) {
    return(
        <form>
            <label>Price of the Book:
            <input type="range"  min="1" max="10000"/>
            <output>500</output>
            </label>
        </form>
    ) 
}

export default Radio;