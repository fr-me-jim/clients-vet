import React, { Component } from 'react';

class NewAppointment extends Component {
    state = {  }
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
                                    />
                            </div>
                        </div>
                    </form>  {/* form-group */}

                    <form action="">
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
                                    />
                            </div>
                        </div>
                    </form>  {/* form-group */}

                    <form action="">
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control"
                                    name='fecha'
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
                                    />
                            </div>
                        </div>
                    </form>  {/* form-group */}
                </div>
            </div>
        );
    }
}
 
export default NewAppointment;