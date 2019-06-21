import React, { Component } from "react";
import axios from "axios";

class Editnote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  getNote = async id => {
    let res = await axios.get("http://localhost:3001/notes/" + id);
    let data = res.data;
    this.setState({
      name: data.name,
      content: data.content
    });
  };
    
    updateNote = async () => {
      let id = this.props.match.params.note_id;
    let res = await axios.put("http://localhost:3001/notes/" + id, this.state);
    let data = res.data;
    this.setState({
      name: data.name,
      content: data.content
    });
    setTimeout(() => {
        this.props.history.push("/");
      }, 500);
  };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.updateNote();
        console.log('updated');
    }
    
    componentDidMount() {
    let id = this.props.match.params.note_id;
    this.getNote(id);
  }

  render() {
    const { name, content } = this.state;
    const isEnabled = name.length > 4 && content.length > 4;
    return (
      <div className="container">
        <div className="row">
          <button
            className="btn backbutton waves-effect col s3 m2 offset-m2"
            onClick={this.goBack}
          >
            Back
          </button>
          <form className="col s12 m11 offset-m2">
            <div className="row">
              <div className="input-field col s12 m9">
                <input
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9">
                <input
                  id="content"
                  type="text"
                  onChange={this.handleChange}
                  className="validate"
                  value={this.state.content}
                />
              </div>
            </div>
            <button 
              disabled={!isEnabled} 
              onClick={this.handleSubmit}
              type="submit"
              className="col offset-s9 offset-m7 btn-floating btn-large waves-effect waves-light backbutton"
            >
              <i className="material-icons">edit</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Editnote;
