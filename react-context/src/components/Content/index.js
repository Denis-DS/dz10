import React from "react";
import CounterBlock from "./CounterBlock";
import footerImg from "../img/252.png";
import style from "./style.module.css";

export default props => {
  return (
    <div className={style.Content}>
      <div>
        <div>
          <p className={style.Name}>{props.name} Profile</p>
          <p>____________</p>
        </div>
        <div>
          <img src={footerImg} alt="photo_user" className={style.Img} />
        </div>
      </div>
      <div className={style.CounterBlock}>
        <CounterBlock text="Followers" type="followers" func="setFollowers" />
        <CounterBlock text="Following" type="following" func="setFollowing" />
      </div>
    </div>
  );
};
