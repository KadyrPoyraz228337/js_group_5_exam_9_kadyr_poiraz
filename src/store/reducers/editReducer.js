import {EDIT_DATA, FETCH_CONTACTS_DATA} from "../action/actionTypes";

export const editReducer = (state = null,action) => {
    switch (action.type) {
        case FETCH_CONTACTS_DATA:
            return {
                ...state,
                ...action.data,
            };
        case EDIT_DATA:
            return {
                ...state,
                [action.name]: action.value,
            };
        default: return state;
    }
};

export default editReducer;