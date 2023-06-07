import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();

    const username = this.username.current.value;

    console.log(`User name ${username}`);
  };
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <lable htmlFor="username">Username</lable>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
