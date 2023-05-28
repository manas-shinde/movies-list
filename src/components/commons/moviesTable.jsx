import React, { Component } from "react";

import Like from "./like";

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in database.</p>
        <table className="table">
          <thead>
            <tr>
              <th key={"title"} onClick={() => this.raiseSort("title")}>
                Title
              </th>
              <th key={"genre"} onClick={() => this.raiseSort("genre")}>
                Genre
              </th>
              <th
                key={"numberInStock"}
                onClick={() => this.raiseSort("numberInStock")}
              >
                Stock
              </th>
              <th
                key={"dailyRentalRate"}
                onClick={() => this.raiseSort("dailyRentalRate")}
              >
                Rate
              </th>
              <th>Like</th>
              <th>Actions</th>
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
                      onLike(ele);
                    }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => onDelete(ele._id)}
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

export default MoviesTable;
