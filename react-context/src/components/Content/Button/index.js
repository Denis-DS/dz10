import React from "react";
import style from "./style.module.css";

export default props => {
  return (
    <button className={style.Button} onClick={props.buttonClick}>
      {props.Simbol}
    </button>
  );
};
