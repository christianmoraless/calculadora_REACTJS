import React from 'react';
import '../hoja_de_estilos/BotonClear.css'
const BotonClear = (props) => (
    <div 
        className='boton_clear' 
        onClick={props.manejarClear}>
            {props.children}
    </div>
)

export default BotonClear;