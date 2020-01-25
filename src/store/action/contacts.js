import {FETCH_CONTACTS} from "./actionTypes";
import axios from 'axios';

export const fetchContacts = (data) => ({type: FETCH_CONTACTS, data});

export const getContactsData = () => async dispatch => {
    const resp = await axios.get('https://lesson-69-ramazan.firebaseio.com/contacts.json');
    dispatch(fetchContacts(resp.data));
};
export const deleteContact = id => async dispatch => await axios.delete('https://lesson-69-ramazan.firebaseio.com/contacts/'+id+'.json');
