import React from "react";

const Corner = props => {
  const { fill, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30.801"
      height="38.718"
      viewBox="0 0 30.801 38.718"
      className={className}
    >
      <path
        id="Path_360"
        data-name="Path 360"
        d="M551,193.027l-30.8,38.718H551Z"
        transform="translate(-520.199 -193.027)"
        fill={fill ? fill : "#4d41b3"}
      />
    </svg>
  );
};

export default Corner;
