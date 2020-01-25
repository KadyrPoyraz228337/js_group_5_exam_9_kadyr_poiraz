import {FETCH_CONTACTS} from "../action/actionTypes";

export const contactsReducer = (state = {contacts: null},action) => {
    switch (action.type) {
        case FETCH_CONTACTS:
                return {
                    ...state,
                    contacts: action.data
                };

        default: return state;
    }
}