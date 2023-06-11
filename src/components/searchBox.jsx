import React from "react";

const SearchBox = ({ value, handleChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search here..."
      value={value}
      onChange={(e) => handleChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
