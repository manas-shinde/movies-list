import React from "react";

const ListGroup = (props) => {
  const { items: geners, valueProperty, textProperty } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item active">All Generes</li>
        {geners.map((genere) => (
          <li className="list-group-item" key={genere[valueProperty]}>
            {genere[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
