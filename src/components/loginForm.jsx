import React from "react";
import joi from "joi-browser";
import Form from "./commons/form.jsx";

import Input from "./commons/input.jsx";

class LoginForm extends Form {
  // username = React.createRef();

  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };

  doSubmit() {
    //Submit the form
    console.log("Submitted!");
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            name="username"
            label="Username"
            value={this.state.data.username}
            error={this.state.errors.username}
            onChange={this.onChange}
          ></Input>
          <Input
            name="password"
            label="Password"
            value={this.state.data.password}
            error={this.state.errors.password}
            onChange={this.onChange}
          ></Input>
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
