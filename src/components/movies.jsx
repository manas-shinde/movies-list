import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = (id) => {
    let movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  render() {
    const {length:cnt} = this.state.movies;

    if (cnt === 0) {
      return <p>Currently there is no movie in database!</p>;
    }

    return (
      <React.Fragment>
        <p>Showing {cnt} movies in database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((ele) => (
              <tr key={ele._id}>
                <td>{ele.title}</td>
                <td>{ele.genre.name}</td>
                <td>{ele.numberInStock}</td>
                <td>{ele.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(ele._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
