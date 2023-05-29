import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { totalItems, pageSize, currentPage, onPageChange } = props;
  //   console.log(currentPage);

  const pagesCount = Math.ceil(totalItems / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  totalItems: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
