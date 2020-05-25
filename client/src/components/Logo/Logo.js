import React, { Fragment } from "react";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={props.logoStyle.Logo}>
    <div className={props.logoStyle.Kanten}>KANTEN</div>
    <div className={props.logoStyle.And}>&</div>
    <div className={props.logoStyle.Meer}>MEER</div>
  </div>
);

export default logo;
