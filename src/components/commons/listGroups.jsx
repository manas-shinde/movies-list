import React from "react";

const ListGroup = (props) => {
  const { items, valueProperty, textProperty, selectedItem, onItemSelected } =
    props;
  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Generes</li> */}

      {items.map((genre) => (
        <li
          className={
            genre === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          key={genre[valueProperty]}
          onClick={() => onItemSelected(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
