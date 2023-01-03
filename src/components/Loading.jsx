import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div onClick={handleClick}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
