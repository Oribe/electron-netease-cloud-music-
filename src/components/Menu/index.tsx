import SvgIcon from "@components/SvgIcon";
import { Routers } from "@src/routers";
import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const Menu: FC<Props> = (props) => {
  return (
    <ul className={styles.menu}>
      {props.menus.map((item) => {
        const { label, path, icon } = item;
        return (
          <li key={label} className={styles.menuItem}>
            <Link to={path}>
              <SvgIcon icon={icon} />
              <span className={styles.label}>{label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

interface Props {
  menus: Routers[];
}
