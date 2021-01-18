import React, { FC } from "react";
import styles from "./index.module.scss";
import avatar from "@assets/WechatIMG5.jpeg";

const User: FC = () => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.nickName}>
        <span>绀野木Yuuki</span>
        <span className={styles.triangle}></span>
      </div>
    </div>
  );
};

export default User;
