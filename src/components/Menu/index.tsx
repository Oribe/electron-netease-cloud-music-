import Link from "@components/Link";
import { Routers } from "@src/routers";
import React, { FC } from "react";
import styles from "./index.module.scss";

const Menu: FC<Props> = (props) => {
  return (
    <ul className={styles.menu}>
      {props.menus.map((item) => {
        const { label, path, icon } = item;
        return (
          <li key={label} className={styles.menuItem}>
            <Link path={path} label={label} icon={icon} />
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
