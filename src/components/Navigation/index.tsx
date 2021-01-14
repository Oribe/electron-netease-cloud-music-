import React, { FC } from "react";

import styles from "./index.module.scss";

const Navigation: FC = () => {
  return (
    <div className={styles.navgator}>
      <div>
        <span>{"<"}</span>
        <span>{">"}</span>
      </div>
    </div>
  );
};
export default Navigation;
