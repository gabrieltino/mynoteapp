import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class Note extends Component {
  state = {
    note: ""
  };

  getPostDetails = async id => {
    let res = await axios.get("http://localhost:3001/notes/" + id);
    this.setState({ note: res.data });
  };
    
  goBack = e => {
    return this.props.history.push("/");
  };
    
  componentDidMount() {
    let id = this.props.match.params.note_id;
    this.getPostDetails(id);
  }
  render() {
    let note = this.state.note;
    return (
      <div className="container">
            <div className="row">
            <button className="btn waves-effect addnote" onClick={this.goBack}>
            BACK
        </button>
          <ul className="collection with-header center">
            <li className="collection-header">
              <h5 className="center">{note.name}</h5>
            </li>
            <li className="collection-item" style={{textAlign: "justify"}}>{note.content}</li>
          </ul>
          <div className="btn waves-effect green">
            <Link to='/edit' className="white-text"><b>Edit</b></Link>
          </div>
          <div className="btn waves-effect red right">
            <Link to='/delete' className="white-text"><b>Delete</b></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
