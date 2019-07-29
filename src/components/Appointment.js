import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => ( 
    <div className="media mt-3">
        <div className="media-body">
            <h5 className="mt-0">{appointment.pet}</h5>
            <p className="card-text"><span>Owner's Name: </span> {appointment.owner} </p>
            <p className="card-text"><span>Date: </span> {appointment.date} </p>
            <p className="card-text"><span>Hour: </span> {appointment.hour} </p>
            <p className="card-text"><span>Symptoms: </span> </p>
            <p className="card-text"> {appointment.symptoms} </p>

            <button 
                className="btn btn-danger"
                onClick={() => deleteAppointment(appointment.id)}
            > Delete &times; </button>
        </div>
    </div>
);

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
 
export default Appointment;