import React, { FC, useState } from "react";
import styles from "./index.module.scss";
// import Icon from "@assets/svg/svg_home.svg";

const SvgIcon: FC<Props> = (props) => {
  const [SvgComponent] = useState(() => {
    if (typeof props.icon === "function") {
      return props.icon;
    }
    return null;
  });
  const [imgSrc] = useState(() => {
    if (typeof props.icon === "string") {
      return props.icon;
    }
    return "";
  });

  return (
    <span className={styles.svgWrapper}>
      {SvgComponent && <SvgComponent />}
      {imgSrc && <img src={imgSrc} alt="" />}
    </span>
  );
};

export default SvgIcon;

interface Props {
  icon?: string | SvgComponent;
}

export type SvgComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>;
