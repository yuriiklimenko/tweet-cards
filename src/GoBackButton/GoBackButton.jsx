import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import css from "./GoBackButton.module.css";
import { useNavigate } from "react-router-dom";

export const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={css.container} onClick={() => navigate("/")}>
      <AiOutlineArrowLeft size={20} className={css.icon} />
      <span className={css.text}>Go back</span>
    </div>
  );
};
