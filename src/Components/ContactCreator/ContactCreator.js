import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addContact} from "../../store/action/contactCreator";

const ContactCreator = props => {
    const initialState = {
        name: '',
        phone: '',
        email: '',
        photo: '',
    };

    const [formData, setFormData] = useState(initialState);

    const inputChangeHandler = e => setFormData({...formData, [e.target.name]: e.target.value});

    const addContact = async e => {
        e.preventDefault();

      await props.addContact(formData);
      props.history.replace('/');
    };

    return (
        <div className='my-3'>
            <h3>Add new contact</h3>
            <Form onSubmit={addContact}>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="name" className='mr-3'>Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Add contact name" onChange={inputChangeHandler} required />
                </FormGroup>
                <p>Phone in format 2xxx-xxx:</p>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="phone" className='mr-3'>Phone</Label>
                    <Input type="tel" name="phone" id='phone' placeholder="Add contact phone number" onChange={inputChangeHandler} required />
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="email" className='mr-3'>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Add contact email" onChange={inputChangeHandler} required />
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="photo" className='mr-3'>Photo</Label>
                    <Input type="text" name="photo" id="photo" placeholder="Add contact photo" onChange={inputChangeHandler} required />
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label className='mr-3 mb-auto'>Photo preview</Label>
                    {formData.photo && <img src={formData.photo} alt="photo preview" className='w-50 border rounded bg-light'/>}
                </FormGroup>
                <Button type='submit' color='success'>Save</Button>{' '}
                <Button type='button' tag={Link} to='/'>Back to contacts</Button>
            </Form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
   addContact: data => dispatch(addContact(data))
});

export default connect(null, mapDispatchToProps)(ContactCreator);