import React, { ChangeEvent, FC, useRef, useState } from "react";
import { debounce, throttle } from "lodash-es";
import styles from "./index.module.scss";
import SvgSearch from "@assets/svg/svg_search.svg";

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
    console.log("event", event.target.value);
    setValue(event.target.value);
  };

  /**
   * 监听按下回车键
   */
  const handleOnKeyDown = () => {
    //
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
        onChange={throttle(handleInputChange, 10000)}
        onKeyDown={handleOnKeyDown}
      />
      {value && (
        <span className={styles.clear} onClick={handleInputClear}></span>
      )}
    </span>
  );
};

export default Search;
