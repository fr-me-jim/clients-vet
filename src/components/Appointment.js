import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => ( 
    <div className="media mt-3">
        <div className="media-body">
            <h5 className="mt-0">{appointment.mascota}</h5>
            <p className="card-text"><span>Nombre Dueño: </span> {appointment.propietario} </p>
            <p className="card-text"><span>Fecha: </span> {appointment.fecha} </p>
            <p className="card-text"><span>Hora: </span> {appointment.hora} </p>
            <p className="card-text"><span>Síntomas: </span> </p>
            <p className="card-text"> {appointment.sintomas} </p>

            <button 
                className="btn btn-danger"
                onClick={() => deleteAppointment(appointment.id)}
            > Borrar &times; </button>
        </div>
    </div>
);

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
 
export default Appointment;