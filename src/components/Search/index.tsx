import SvgSearch from "@assets/svg/svg_search.svg";
import React, { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";
import styles from "./index.module.scss";

const Search: FC = () => {
  const [value, setValue] = useState<string>();

  const inputRef = useRef<HTMLInputElement>();

  const handleInputClear = () => {
    console.log("111");
    setValue("");
    inputRef.current.value = "";
  };

  /**
   * 输入框值发生变化
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValue(event.target.value);
  };

  /**
   * 监听按下回车键
   */
  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    event.persist();
    console.log("回车搜索", event.ctrlKey);
  };

  return (
    <span className={styles.searchWrapper}>
      <span className={styles.icon}>
        <SvgSearch />
      </span>
      <input
        ref={inputRef}
        type="text"
        placeholder="搜索"
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
      />
      {value && (
        <span className={styles.clear} onClick={handleInputClear}></span>
      )}
    </span>
  );
};

export default Search;
