import Search from "@components/Search";
import React, { FC } from "react";
import style from "./index.module.scss";

const Header: FC = () => {
  return (
    <header className={style.headerContainer}>
      {/* <Navigation /> */}
      <Search />
      {/* <div className={style.functionBar}>
      </div> */}
    </header>
  );
};

export default Header;
