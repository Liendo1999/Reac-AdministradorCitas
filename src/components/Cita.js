import React from 'react';
import PropTypes from 'prop-types';
//En el boton debe ser un arrow function para que espere a que se haga el click para ejecutar la funcion
const Cita = ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Mascota: {cita.mascota} <span> </span></p>
        <p>Propietario: {cita.propietario} <span> </span></p>
        <p>Fecha: {cita.fecha} <span> </span></p>
        <p>Hora: {cita.hora} <span> </span></p>
        <p>Síntomas: {cita.sintomas} <span> </span></p>

        <button onClick={() => eliminarCita(cita.id)}
                className="button eliminar u-full-width"
        >ELIMINAR CITA &times;</button>
    </div>
);

Cita.propTypes = {
        cita: PropTypes.object,
        eliminarCita: PropTypes.func
}

export default Cita;
