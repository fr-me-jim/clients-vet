import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    },
    error: false
}

class NewAppointment extends Component {
    state = { ...initialState }

    //when user fills the form
    handleChange = e => {
        //update state by input
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value
            }
        })
    }

    //when form submitted
    handleSubmit = e => {
        e.preventDefault();

        //get values from state
        const {pet, owner, date, hour, symptoms} = this.state.appointment;

        //check that all fields are filled
        if(pet === '' | owner==='' | date==='' | hour==='' | symptoms==='') {
            this.setState({
                error: true
            });
            return;
        }
        //create object with the data
        const newAppointment = this.state.appointment;
        newAppointment.id = uuid();
        
        //add appointment to App's state
        this.props.createNewAppointment(newAppointment);

        //reload state
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
                        Fill the form to create a new appointment
                    </h3>
                    
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> All fields are mandatory!</div> : null}

                    <form action="" onSubmit={this.handleSubmit} >
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Pet's Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Pet's Name"
                                    name='pet'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Owner's Name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Owner's name"
                                    name='owner'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Date
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date" 
                                    className="form-control"
                                    name='date'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.date}
                                    />
                            </div>

                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Hour
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time" 
                                    className="form-control"
                                    name='hour'
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hour}
                                    />
                            </div>
                        </div>{/* form-group */}

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Symptoms
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    name="symptoms" 
                                    className="form-control" 
                                    placeholder="Describe symptoms"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.symptoms}
                                ></textarea>
                            </div>
                        </div>{/* form-group */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Add new appointment."/>
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