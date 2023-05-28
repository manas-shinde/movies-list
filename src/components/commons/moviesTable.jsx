import React from "react";
import Like from "./like";

const MoviesTable = (props) => {
  const { movies, onLike, onDelete, onSort } = props;
  return (
    <React.Fragment>
      <p>Showing {movies.length} movies in database.</p>
      <table className="table">
        <thead>
          <tr>
            <th key={"title"} onClick={() => onSort("title")}>
              Title
            </th>
            <th key={"genre"} onClick={() => onSort("genre")}>
              Genre
            </th>
            <th key={"numberInStock"} onClick={() => onSort("numberInStock")}>
              Stock
            </th>
            <th
              key={"dailyRentalRate"}
              onClick={() => onSort("dailyRentalRate")}
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
};

export default MoviesTable;
