import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./commons/pagination";
import ListGroup from "./commons/listGroups";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    searchQuery: "",
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [
      { _id: "5b21ca3eeb7f6fbccd471816", name: "All Genres" },
      ...getGenres(),
    ];
    this.setState({ movies: getMovies(), genres });
  }

  handleSorting = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleGenereSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGener: genre, currentPage: 1 });
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
  handleSearch = (serachQuery) => {
    this.setState({ serachQuery });
  };
  render() {
    const { length: cnt } = this.state.movies;
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGener,
      movies: allMovies,
    } = this.state;

    const filteredMovies =
      selectedGener && selectedGener.name !== "All Genres"
        ? allMovies.filter((mov) => mov.genre._id === selectedGener._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      sortColumn.order
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);

    if (cnt === 0) {
      return <p>Currently there is no movie in database!</p>;
    }

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelected={this.handleGenereSelect}
            selectedItem={this.state.selectedGener}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>Showing {filteredMovies.length} movies in database.</p>
          <SearchBox
            value={this.state.searchQuery}
            handleChange={this.handleSearch}
          />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSorting}
          />
          <Pagination
            totalItems={filteredMovies.length}
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
