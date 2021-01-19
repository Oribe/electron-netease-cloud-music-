import React, { FC } from "react";

import styles from "./index.module.scss";
import SvgSearch from "@assets/svg/svg_search.svg";

const Search: FC = () => {
  return (
    <span className={styles.searchWrapper}>
      <span className={styles.icon}>
        <SvgSearch />
      </span>
      <input type="text" placeholder="搜索" />
      <span className={styles.clear}></span>
    </span>
  );
};

export default Search;
