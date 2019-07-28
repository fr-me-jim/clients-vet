import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...initialState }

    //cuando el usuario llena el form
    handleChange = e => {
        //update state segun el input
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    //cuando se envia el form
    handleSubmit = e => {
        e.preventDefault();

        //extraer valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.appointment;

        //validar que todos los campos esten rellenados
        if(mascota === '' | propietario==='' | fecha==='' | hora==='' | sintomas==='') {
            this.setState({
                error: true
            });
            return;
        }
        //generar objeto con los datos
        const newAppointment = this.state.appointment;
        newAppointment.id = uuid();
        
        //agregar cita al state de App
        this.props.createNewAppointment(newAppointment);

        //reiniciar state
        this.setState({
            ...initialState
        })
    }

    render() { 
        const {error} = this.state;

        return ( 
            <div className="card mt-5 py-4">
                <div className="card-body">
                    <h3 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h3>
                    
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los campos son obligatórios!</div> : null}

                    <form action="" onSubmit={this.handleSubmit} >
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

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}
 
export default NewAppointment;