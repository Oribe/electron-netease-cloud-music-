import React, { FC } from "react";
import Navigation from "../Navigation";

import styles from "./index.module.scss";

const SiderBar: FC = () => {
  return (
    <aside className={styles.aside}>
      <Navigation />
      这里是侧边栏
    </aside>
  );
};

export default SiderBar;
