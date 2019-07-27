import React, { Component } from 'react';

class NewAppointment extends Component {
    state = { 
        appointment: {
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
    }

    handleChange = e => {
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    render() { 
        return ( 
            <div className="card mt-5 py-4">
                <div className="card-body">
                    <h3 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h3>
                    
                    <form action="">
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder='Nombre Mascota'
                                    name='mascota'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.mascota}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder='Nombre Dueño Mascota'
                                    name='propietario'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.propietario}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control"
                                    name='fecha'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.fecha}
                                    />
                            </div>

                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time" 
                                    className="form-control"
                                    name='hora'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hora}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    name="sintomas" 
                                    className="form-control" 
                                    placeholder="Describe los síntomas"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.sintomas}
                                ></textarea>
                            </div>
                        </div>{/* form-group */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
                    </form>  

                    
                </div>
            </div>
        );
    }
}
 
export default NewAppointment;