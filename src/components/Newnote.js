import React from "react";
import axios from "axios";

class Newnote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  goBack = e => {
    return this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submitNote = async () => {
    let res = await axios.post('http://localhost:3001/notes', this.state);
    let data = res.data;
    this.setState({ note: data });
    setTimeout(() => {
      this.props.history.push("/");
    }, 500);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.submitNote();
    console.log(this.state)
  };

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
                  id="name"
                  type="text"
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="title">Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m9">
                <input
                  id="content"
                  type="text"
                  onChange={this.handleChange}
                  className="validate"
                />
                <label htmlFor="content">Content</label>
              </div>
            </div>
            <button
              disabled={!isEnabled} 
              onClick={this.handleSubmit}
              type="submit"
              className="col offset-s9 offset-m7 btn-floating btn-large waves-effect waves-light backbutton"
            >
              <i className="material-icons">add</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Newnote;