import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";
import NavBar from "./components/commons/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/movies-list" component={Movies}></Route>
            <Route path="/movies/:id" component={MoviesForm}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies-list"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
