import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';
//POdemos pasasr el props como tal o usar destructuring y sacar solo la funcion crearcita
const Formulario = ({crearCita}) => {
    //State para las citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //State para el error
    const [error,actualizarError] = useState(false)

    //Funcion del Onchange
    const actualizarState = evento => {
        actualizarCita({
            ...cita,
            [evento.target.name]: evento.target.value
        })

    }

    //Valores de la cita
    const {mascota,propietario,fecha,hora,sintomas} = cita;

    //Funcion agregar cita
    const submitCita = e => {
        e.preventDefault();
        // PASOS 1. VALIDAR
        if(mascota.trim() === "" ||propietario.trim() === "" ||fecha.trim() === "" ||hora.trim() === "" ||sintomas.trim() === ""){
            actualizarError(true);
            return;
            //este return es importante para que no se continue ejecutando el código
        }
        // Reseteo del Aviso de error
        actualizarError(false);

        //2. ASIGNAR ID - En este caso uso el paquete UUID xq no usamos una base de datos.
        cita.id = uuid();
        //3. Crear CIta
        crearCita(cita);
        //4. Reciniciar el formulario
        // estos se reinician por el atributo value en el input
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error
                    ? <p className="alerta-error">Todos los campos son obligatorios</p>
                    : null
            }
            <form action=""
                  onSubmit={submitCita}
            >

                <label htmlFor="">Nombre mascota</label>
                <input type="text"
                       name="mascota"
                       className="u-full-width"
                       placeholder="Nombre mascota"
                       onChange={actualizarState}
                       value={mascota}
                />
                <label htmlFor="">Nombre dueño</label>
                <input type="text"
                       name="propietario"
                       className="u-full-width"
                       placeholder="Nombre dueño"
                       onChange={actualizarState}
                       value={propietario}
                />
                <label htmlFor="">Fecha</label>
                <input type="date"
                       name="fecha"
                       className="u-full-width"
                       onChange={actualizarState}
                       value={fecha}
                />
                <label htmlFor="">Hora</label>
                <input type="time"
                       name="hora"
                       className="u-full-width"
                       onChange={actualizarState}
                       value={hora}
                />
                <label htmlFor="">Sintomas</label>
                <textarea name="sintomas"
                          className="u-full-width"
                          onChange={actualizarState}
                          value={sintomas}
                > </textarea>
                <button type="submit"
                        className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
};

Formulario.propTypes = {
    crearCita:PropTypes.func
}

export default Formulario;
