import React, { isValidElement } from "react";
import { FC } from "react";
import styles from "./index.module.scss";

const SvgIcon: FC<Props> = (props) => {
  const { icon } = props;

  if (isValidElement(icon)) {
    console.log("这是一个html");
  }
  return (
    <span className={styles.svgWrapper}>
      {/* <img src={icon} alt="" />  */}
    </span>
  );
};

export default SvgIcon;

interface Props {
  icon?: string;
}
