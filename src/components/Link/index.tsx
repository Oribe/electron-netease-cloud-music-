import SvgIcon, { SvgComponent } from "@components/SvgIcon";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const Link: FC<Props> = (props) => {
  const { path, label, icon } = props;
  return (
    <NavLink activeClassName={styles.active} to={path} exact>
      <SvgIcon icon={icon} />
      {label && <span className={styles.label}>{label}</span>}
    </NavLink>
  );
};

export default Link;

interface Props {
  label?: string;
  icon?: string | SvgComponent;
  path?: string;
}
