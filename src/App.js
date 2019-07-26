import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NewAppointment from './components/NewAppointment';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="container">
        <Header title='Administrador Pacientes Veterinaria' />
        <div className="row">
          <div className="col-md-12 mx-auto">
            <NewAppointment/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;

