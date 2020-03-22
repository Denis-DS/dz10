import React from "react";
import Button from "../Button";
import Counter from "../Counter";
import style from "./style.module.css";

import { UserContext } from "../../../context";

export default class Counters extends React.PureComponent {
  static contextType = UserContext;

  componentDidUpdate() {
    console.log(`${this.props.text}: ${this.context[this.props.type]}`);
  }

  render() {
    const bttn = ["+", "-"];
    const func = i => {
      if (i === "+") {
        return this.context[this.props.type] <= 0
          ? this.context[this.props.func](this.context[this.props.type] + 1)
          : this.context[this.props.func](this.context[this.props.type] + 1);
      } else {
        return this.context[this.props.type] <= 0
          ? this.context[this.props.func](this.context[this.props.type])
          : this.context[this.props.func](this.context[this.props.type] - 1);
      }
    };
    return (
      <div className={style.Counter}>
        <div className={style.Text}>
          <Counter counterValue={this.context[this.props.type]} />
          <p className={style.Text}>{this.props.text}</p>
        </div>
        <div className={style.ButtonsContainer}>
          {bttn.map(i => (
            <Button buttonClick={() => func(i)} Simbol={i} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
