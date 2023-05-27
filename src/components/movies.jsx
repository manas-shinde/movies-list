import React, { Component } from "react";
import Like from "./commons/like";
import Pagination from "./commons/pagination";
import ListGroup from "./commons/listGroup.jsx";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    geners: [],
    pageSize: 4,
    currentPage: 1,
  };
  componentDidMount() {
    this.setState({ movies: getMovies(), geners: getGenres() });
  }

  handleGenereSelect = (genere) => {
    console.log(genere);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleDelete = (id) => {
    let movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    const { length: cnt } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    if (cnt === 0) {
      return <p>Currently there is no movie in database!</p>;
    }

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.geners}
            onItemSelected={this.handleGenereSelect}
          />
        </div>
        <div className="col">
          <p>Showing {cnt} movies in database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                {/* <th>Like</th>
              <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {movies.map((ele) => (
                <tr key={ele._id}>
                  <td>{ele.title}</td>
                  <td>{ele.genre.name}</td>
                  <td>{ele.numberInStock}</td>
                  <td>{ele.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={ele.liked}
                      onClick={() => {
                        this.handleLike(ele);
                      }}
                    />
                  </td>
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
          <Pagination
            totalItems={cnt}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
