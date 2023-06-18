import React from "react";
import PropTypes from "prop-types";
import css from "./BackgroundImage.module.css";

export const BackgroundImage = ({ imageUrl, children }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={css.container} style={style}>
      {children}
    </div>
  );
};

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
};
