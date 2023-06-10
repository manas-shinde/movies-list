import React, { Component } from "react";

import Input from "./commons/input.jsx";

class LoginForm extends Component {
  // username = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username === "") errors.username = "Username is required.";
    if (account.password === "") errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required!";
    }
    if (name === "password") {
      if (value.trim() === "") return "Username is required!";
    }
  };

  onChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            name="username"
            label="Username"
            value={this.state.account.username}
            error={this.state.errors.username}
            onChange={this.onChange}
          ></Input>
          <Input
            name="password"
            label="Password"
            value={this.state.account.password}
            error={this.state.errors.password}
            onChange={this.onChange}
          ></Input>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
