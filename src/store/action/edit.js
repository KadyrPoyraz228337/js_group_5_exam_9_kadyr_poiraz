import {EDIT_DATA, FETCH_CONTACTS_DATA} from "./actionTypes";
import axios from 'axios';

export const fetchContactData = data => ({type: FETCH_CONTACTS_DATA, data});
export const editData = (name, value) => ({type: EDIT_DATA, name, value});

export const getContactData = id => async dispatch => {
  const resp = await axios.get('https://lesson-69-ramazan.firebaseio.com/contacts/'+id+'.json');
  dispatch(fetchContactData(resp.data));
};

export const replaceData = (data, id) => async dispatch => await axios.put('https://lesson-69-ramazan.firebaseio.com/contacts/'+id+'.json', data);

