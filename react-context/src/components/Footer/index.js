import React from "react";
import style from "./style.module.css";
import footerImg from "../img/310.png";

export default class Footer extends React.Component {
  render() {
    return (
      <div className={style.Footer}>
        <div className={style.DivCont}>
          <p className={style.Text}>365 Freebies. 007/365</p>
        </div>
        <div className={style.DivCont}>
          <img src={footerImg} alt="footerImg" />
        </div>
        <div className={style.DivCont}>
          <p className={style.Text}>@anakerenart</p>
        </div>
      </div>
    );
  }
}
