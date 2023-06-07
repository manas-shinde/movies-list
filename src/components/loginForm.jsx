import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: {
      username: "default",
      password: "default",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();

    const username = this.username.current.value;

    console.log(`User name ${username}`);
  };

  onChange = (e) => {
    e.preventDefault();

    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;

    this.setState({ account });
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={this.state.account.username}
              onChange={this.onChange}
              ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.onChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
