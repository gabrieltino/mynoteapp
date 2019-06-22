import { FETCH_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from './types';
import axios from 'axios';

export const fetchNotes = () => dispatch => {
  fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(notes =>
      dispatch({
        type: FETCH_NOTES,
        payload: notes
      })
    );
};

export const addNote = (note) => dispatch => {
  axios.post("http://localhost:3001/notes", note)
    .then(note => dispatch({
      type: ADD_NOTE,
      payload: note
    })
    );
};

export const editNote = (note) => dispatch => {
  axios.put(`http://localhost:3001/notes/${note.id}`, note)
    .then(note => dispatch({
      type: EDIT_NOTE,
      payload: note
    })
    );
};

export const deleteNote = (id) => dispatch => {
  axios.delete("http://localhost:3001/notes/" + id)
    .then(note => dispatch({
      type: DELETE_NOTE,
      payload: id
    })
    );
};