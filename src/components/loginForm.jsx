import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form action="">
          <div className="form-group">
            <lable htmlFor="username">Username</lable>
            <input id="username" type="text" className="form-control" />
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
