import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';


const AppointmentsList = ({appointments, deleteAppointment}) => ( 
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h4 className="card-title text-center">Administra tus citas aquí</h4>

            <div className="lista-citas">
                {appointments.map(appointment => (
                    <Appointment 
                        key={appointment.id}
                        appointment={appointment}
                        deleteAppointment={deleteAppointment}
                    />
                ))}

            </div>
        </div>

    </div> 
);

AppointmentsList.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
 
export default AppointmentsList;