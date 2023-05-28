import React, { Component } from "react";

import Like from "./commons/like";
import TableHeader from "./commons/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    { key: "like" },
    { key: "action" },
  ];
  render() {
    const { movies, onLike, onSort, onDelete, sortColumn } = this.props;
    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in database.</p>
        <table className="table">
          <TableHeader
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
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
