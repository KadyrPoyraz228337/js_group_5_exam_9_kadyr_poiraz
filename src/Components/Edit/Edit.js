import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {editData, getContactData, replaceData} from "../../store/action/edit";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";

const Edit = props => {
    useEffect(() => {
        props.getContactData(props.match.params.id);
    }, []);

    const inputChangeHandler = e => props.editData(e.target.name, e.target.value);

    const addChanges = async e => {
        e.preventDefault();

      await props.replaceData(props.contact, props.match.params.id);
      props.history.replace('/');
    };

    return props.contact && (
        <div className='my-3'>
            <h3>Edit contact</h3>
            <Form onSubmit={addChanges}>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="name" className='mr-3'>Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Add contact name" onChange={inputChangeHandler} required value={props.contact.name}/>
                </FormGroup>
                <p>Phone in format 2xxx-xxx:</p>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="phone" className='mr-3'>Phone</Label>
                    <Input type="tel" name="phone" id='phone' placeholder="Add contact phone number" onChange={inputChangeHandler} required value={props.contact.phone}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="email" className='mr-3'>Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Add contact email" onChange={inputChangeHandler} required value={props.contact.email}/>
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label for="photo" className='mr-3'>Photo</Label>
                    <Input type="text" name="photo" id="photo" placeholder="Add contact photo" onChange={inputChangeHandler} required value={props.contact.photo} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center'>
                    <Label className='mr-3 mb-auto'>Photo preview</Label>
                    {props.contact.photo && <img src={props.contact.photo} alt="photo preview" className='w-50 border rounded bg-light'/>}
                </FormGroup>
                <Button type='submit' color='success'>Save</Button>{' '}
                <Button type='button' tag={Link} to='/'>Back to contacts</Button>
            </Form>
        </div>
    );
};

const mapStateToProps = state => ({
    contact: state.edit
});

const mapDispatchToProps = dispatch => ({
    getContactData: id => dispatch(getContactData(id)),
    editData: (name, value) => dispatch(editData(name, value)),
    replaceData: (data, id) => dispatch(replaceData(data, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);