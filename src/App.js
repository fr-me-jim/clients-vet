import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import AppointmentsList from './components/AppointmentsList';

class App extends Component {
  state = { 
    appointments: []
  }

  //cuando la app se ha cargado
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointments');
    if(appointmentsLS){
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      })
    }
  }

  //cuando la app se actualiza (se elimina/crea una cita)
  componentDidUpdate(){
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }


  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data];

    this.setState({
      appointments
    })
  }

  deleteAppointment = id => {
    
    //copiar state de citas actual
    const currentAppointments = [...this.state.appointments];

    //filtrar por el elemento @id
    const appointments = currentAppointments.filter(appointment => appointment.id !== id);

    //actualizar state
    this.setState({
      appointments
    })

  }

  render() { 
    return (
      <div className="container">
        <Header title='Administrador Pacientes Veterinaria' />
        <div className="row">
          <div className="col-md-12 mx-auto">
            <NewAppointment createNewAppointment={this.createNewAppointment} />
            
          </div>

          <div className="mt-5 col-md-12 mx-auto">
            <AppointmentsList 
              appointments={this.state.appointments} 
              deleteAppointment={this.deleteAppointment}
            />

          </div>
        </div>
      </div>
    );
  }
}
 
export default App;

