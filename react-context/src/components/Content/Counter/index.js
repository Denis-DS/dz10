import React from "react";
import style from "./style.module.css";

export default props => {
  return <p className={style.Text}>{props.counterValue}</p>;
};
