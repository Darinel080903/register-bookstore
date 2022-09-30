import "/home/darinel/Escritorio/Darinel/React/Practica-04/src/css/ContenedorLargo.css";
import Checkbox from "../atoms/Password";
import Password from "../atoms/Checkbox";
import Date from "../atoms/Date";
import Radio from "../atoms/Radio";
import Number from "../atoms/Number";


function ContenedorLargo(props) {
  return (
    <div className="contenedor_cuadro">
      <div className="contenedor_texto">
        <p className="nombre-tema">
          <strong>{props.tema}</strong>
        </p>

        <form>
          <label>
            Name of the book:
            <input type="text" name="name" />
          </label>
        </form>

        <form>
          <label>
            Author:
            <input type="email" name="email" />
          </label>
        </form>
        <Date/>
        <Number/> 
        <Checkbox/>
        <Radio/>
        <Password/>
        <input type="submit" name="Send" />
      </div>
    </div>
  );
}

export default ContenedorLargo;
