import React from "react";

const ListGroup = (props) => {
  const { items: geners } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item">All Generes</li>
        {geners.map((genere) => (
          <li className="list-group-item" key={genere._id}>
            {genere.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListGroup;
