import { FETCH_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/types';

const initialState = {
    notes: [],
    note: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case ADD_NOTE:
            return {
                ...state,
                note: action.payload
            }
            case EDIT_NOTE:
                    return {
                        ...state,
                        note: action.payload
                    }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload)
            }
        
        default:
            return state;
    }
}