import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { totalItems, pageSize } = props;
  const pagesCount = Math.ceil(totalItems / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className="page-item" key={page}>
            <a className="page-link" href={page}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
