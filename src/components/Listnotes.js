import React, { Component } from "react";
import axios from 'axios';

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
    const showdem = this.state.notes.map(note => {
      return (
        <ul className="collection" key={note.id}>
        <li className="collection-item">
            <div>
                <a href="#q">{note.name}</a>
                <a href="#!" className="secondary-content col s1 right">
                <i className="material-icons">edit</i>
                </a>
                <a href="#!" className="secondary-content col s2 right">
                <i className="material-icons">delete</i>
                </a>
                </div>
            </li>
      </ul>
      );
    });
    return (
      <div className="container">
        <div className="row">
        <button className="btn waves-effect addnote">ADD NOTE</button>
          <div className="col s12">
          {showdem}
          </div>
        </div>
      </div>
    );
  }
}

export default Listnotes;
