import React, { FC } from "react";

import styles from "./index.module.scss";

const Navigation: FC = () => {
  return (
    <div className={styles.navgator}>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowLeft}></div>
        <div className={styles.arrowRight}></div>
      </div>
    </div>
  );
};
export default Navigation;
