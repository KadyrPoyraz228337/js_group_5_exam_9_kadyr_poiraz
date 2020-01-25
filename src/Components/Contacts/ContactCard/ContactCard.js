import React, {useState} from 'react';
import './ContactCard.css'
const ContactCard = props => {

    return (
        <>
            <div className='border rounded bg-light d-flex p-2 cart my-2 w-75' onClick={() => {props.setToggle(true); props.setContact({...props.data, id: props.id})}}>
                <div className='w-25 overflow-hidden d-flex align-items-center justify-content-center justify-content-center' style={{height: '120px'}}>
                    <img src={props.data.photo} alt="Contact photo" className='w-100 border rounded'/>
                </div>
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <h1>{props.data.name}</h1>
                </div>
            </div>
        </>
    );
};

export default ContactCard;