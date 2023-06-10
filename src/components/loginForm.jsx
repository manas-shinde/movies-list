import React, { Component } from "react";
import joi from "joi-browser";

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
  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required().label("Password"),
  };
  validate = () => {
    const options = { abortEarly: false };

    const result = joi.validate(this.state.account, this.schema, options);

    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };
  validateProperty = ({ name, value }) => {
    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required!";
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Username is required!";
    // }
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
