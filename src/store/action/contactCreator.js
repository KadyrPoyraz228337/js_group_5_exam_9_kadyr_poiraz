import axios from 'axios';

export const addContact = data => async dispatck => await axios.post('https://lesson-69-ramazan.firebaseio.com/contacts.json', data);