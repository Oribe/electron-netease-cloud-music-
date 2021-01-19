import Menu from "@components/Menu";
import { routers } from "@src/routers";
import React, { FC } from "react";
import Navigation from "../History";
import User from "../User";

import styles from "./index.module.scss";

const SiderBar: FC = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
      <User />
      <Menu menus={routers} />
    </aside>
  );
};

export default SiderBar;
