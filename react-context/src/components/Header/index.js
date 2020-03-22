import React from "react";
import style from "./style.module.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className={style.Header}>
        <p className={style.Text}>{this.props.name}</p>
      </div>
    );
  }
}
