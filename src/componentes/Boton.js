import React from 'react';
import '../hoja_de_estilos/Boton.css';
function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !=='=');
    };

    return (
        <div 
            className={`boton_contenedor ${esOperador(props.children) ? 'operador' : null} `.trimEnd()}
            onClick={()=>props.manejarClic(props.children)}>
            {props.children}
        </div>
    )

}
export default Boton;