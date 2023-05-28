import React from "react";
import propTypes from "prop-types";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};
Like.propTypes = {
  liked: propTypes.bool,
  onClick: propTypes.func.isRequired,
};

export default Like;
