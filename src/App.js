import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';

class App extends Component {
  state = { 
    appointments: []
   }

  createNewAppointment = data => {
    const appointments = [...this.state.appointments, data];

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
        </div>
      </div>
    );
  }
}
 
export default App;

