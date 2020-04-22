import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux"

class InputScreen extends React.Component {
  state = {
    username: "",
    email: "",
    textbox: "",
  };

  inputHandler = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { username, email, textbox } = this.state;

    return (
      <div>

        {this.props.todo.todoInput
        }
        <h1>Input Screen</h1>
        <h3>Username: {username} </h3>
        <h3>Email: {email} </h3>
        <input
          onChange={(e) => this.inputHandler(e, "username")}
          // onChange={this.inputHandler}
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          onChange={(e) => this.inputHandler(e, "email")}
          type="text"
          placeholder="Email"
        />
        <br />
        <textarea
          onChange={(e) => this.inputHandler(e, "textbox")}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p> {textbox.length} / 140</p>



        <Link to={'/profile/' + username}>

          <input
            type="button"
            className="btn btn-danger"
            value="click me"
          />

        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(InputScreen)

// export default InputScreen;