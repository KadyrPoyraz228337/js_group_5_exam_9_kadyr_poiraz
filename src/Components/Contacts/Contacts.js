import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {deleteContact, getContactsData} from "../../store/action/contacts";
import ContactCard from "./ContactCard/ContactCard";
import {Link} from "react-router-dom";
import UserModal from "../UI/Modal/UserModal";
import {Button} from "reactstrap";

const Contacts = props => {

    useEffect(() => {
        props.getContacts();
    }, []);

    const [toggle, setToggle] = useState(false);

    const [contact, setContact] = useState(null);

    const contactDelete = async () => {
        const userAsw = window.confirm("Are you sure you want to delete the contact "+contact.name+'?');
        if(userAsw) {
            await props.deleteContact(contact.id);
            await props.getContacts();
            setToggle(false);
        }
    };

    return props.contacts && (
        <div className='pt-3 d-flex flex-column align-items-center'>
            {!props.contacts.contacts && <p>there is nothing here yet</p>}
            {props.contacts.contacts && Object.keys(props.contacts.contacts).map(contact => {
                return (
                    <ContactCard
                        {...props}
                        setToggle={setToggle}
                        setContact={setContact}
                        key={contact}
                        data={props.contacts.contacts[contact]}
                        id={contact}
                    />
                )
            })}
            {contact && <UserModal isOpen={toggle} toggle={setToggle}>
                <div className='d-flex mb-2'>
                    <div className='overflow-hidden w-25 h-100 mr-3'>
                        <img src={contact.photo} alt="" className='w-100 border rounded'/>
                    </div>
                    <div>
                        <div className='mb-3'>
                            <h3>{contact.name}</h3>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <img src="https://www.shareicon.net/data/2016/05/03/759092_phone_512x512.png" alt="" className='w-auto mr-2' style={{height: '20px'}}/>
                            <p className='m-0'>{contact.phone}</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <img src="https://toppng.com/public/uploads/preview/this-free-icons-png-design-of-mail-ico-11563280528awtfvfkugq.png" alt="" className='w-auto mr-2' style={{height: '20px'}}/>
                            <p className='m-0'>{contact.email}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button color='success' style={{width: '49.5%', marginRight: '1%'}} tag={Link} to={'edit/'+contact.id}>Edit</Button>
                    <Button color='danger' style={{width: '49.5%'}} onClick={() => contactDelete()}>delete</Button>
                </div>
            </UserModal>}
        </div>
    );
};

const mapStateToProps = state => ({
   contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
   getContacts: () => dispatch(getContactsData()),
    deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);