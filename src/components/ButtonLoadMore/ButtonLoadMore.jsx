import PropTypes from "prop-types";
import css from "./ButtonLoadMore.module.css";

export const ButtonLoadMore = ({ onClickButton }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => onClickButton()}
    >
      Load more
    </button>
  );
};

ButtonLoadMore.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
