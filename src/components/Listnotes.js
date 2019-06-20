import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

class Listnotes extends Component {
  state = {
    notes: []
  };
  
  getNotes = async () => {
    let res = await axios.get('http://localhost:3001/notes');
    let data = res.data;
    this.setState({ notes: data });
};
  componentWillMount(){
    this.getNotes();
  }

  render() {
    const shownotes = this.state.notes.map(note => {
      return (
        <ul className="collection" key={note.id}>
        <li className="collection-item">
            <div className="center">
                <Link to={'/' + note.id}>{note.name}</Link>
                </div>
            </li>
      </ul>
      );
    });
    return (
      <div className="container">
        <div className="row">
        <Link to='/new' className="white-text">
          <button className="btn waves-effect addnote">ADD NOTE</button>
        </Link>
          <div className="col s12">
          {shownotes}
          </div>
        </div>
      </div>
    );
  }
}

export default Listnotes;
