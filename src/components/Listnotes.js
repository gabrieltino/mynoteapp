import React, { Component } from "react";
import propTypes from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotes } from "../actions/noteActions";

class Listnotes extends Component {
  componentWillMount() {
    this.props.fetchNotes();
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.addNote) {
  //     // console.log(nextProps.addNote.data)
  //     // console.log(this.props.notes)
  //     this.props.notes.unshift(nextProps.addNote.data);
  //   }
  // }

  render() {
    const shownotes = this.props.notes.map(note => {
      return (
        <ul className="collection" key={note.id}>
          <li className="collection-item">
            <div className="center">
              <Link to={"/" + note.id}>{note.name}</Link>
            </div>
          </li>
        </ul>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Link to="/new" className="white-text">
            <button className="btn waves-effect addnote">ADD NOTE</button>
          </Link>
          <div className="col s12">{shownotes}</div>
        </div>
      </div>
    );
  }
}

Listnotes.propTypes = {
  fetchNotes: propTypes.func.isRequired,
  notes: propTypes.array.isRequired,
  addNote: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  notes: state.notes.notes,
  addNote: state.notes.note
});

export default connect(
  mapStateToProps,
  { fetchNotes }
)(Listnotes);
