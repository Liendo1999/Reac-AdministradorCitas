import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales) {
        citasIniciales = [];
    }

    //arreglo de citas
    const [citas, guardarCitas] = useState(citasIniciales);
    //Función que toma las actuales y agrega la nueva
    const crearCita = cita => {
        guardarCitas([...citas, cita])
    }
    const eliminarCita = id => {
        let actualizandoCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(actualizandoCitas);
    }


    //Use effect para operaciones cuando cambia el state
    //Se ejecuta cuando se carga el state y cuando cambia
    //El segundo argumento es el state a observar, en este caso se usa para
    //almacenar en el localStorage
    useEffect(() => {
        let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        if (citasIniciales) {
            localStorage.setItem('citas',JSON.stringify(citas))
        } else {
            localStorage.setItem('citas',JSON.stringify([]))
        }
    }, [citas])

    //Mensaje condicional
    const mensaje = citas.length === 0 ? "No hay citas programadas" : "Administra tus citas";


    return (
        <Fragment>
            <h1>
                Administrador de citas - Veterinaria
            </h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            crearCita={crearCita}
                        />
                    </div>

                    <div className="one-half column">
                        <h2>{mensaje}</h2>
                        {citas.map(cita => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
