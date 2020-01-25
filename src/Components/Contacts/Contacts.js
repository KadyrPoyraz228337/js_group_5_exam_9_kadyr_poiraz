import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {deleteContact, getContactsData} from "../../store/action/contacts";
import ContactCard from "./ContactCard/ContactCard";

const Contacts = props => {

    useEffect(() => {
        props.getContacts();
    }, []);

    return props.contacts && (
        <div className='pt-3 d-flex flex-column align-items-center'>
            {!props.contacts.contacts && <p>there is nothing here yet</p>}
            {props.contacts.contacts && Object.keys(props.contacts.contacts).map(contact => {
                return (
                    <ContactCard
                        {...props}
                        key={contact}
                        data={props.contacts.contacts[contact]}
                        id={contact}
                        deleteContact={props.deleteContact}
                        get={props.getContacts}
                    />
                )
            })}
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