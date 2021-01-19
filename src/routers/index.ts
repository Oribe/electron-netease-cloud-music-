import Friend from "@pages/Friend";
import Private from "@pages/Private";
import Video from "@pages/Video";
import Home from "@src/pages/Home";
import { RedirectProps, RouteProps } from "react-router-dom";

import IconHome from "@assets/svg/svg_home.svg";
import IconPrivate from "@assets/svg/svg_fm.svg";
import IconVideo from "@assets/svg/svg_video.svg";
import IconFriend from "@assets/svg/svg_firend.svg";
import { SvgComponent } from "@components/SvgIcon";

export const routers: Routers[] = [
  {
    label: "发现音乐",
    path: "/home",
    component: Home,
    icon: IconHome,
  },
  {
    label: "私人FM",
    path: "/private",
    component: Private,
    icon: IconPrivate,
  },
  {
    label: "视频",
    path: "/video",
    component: Video,
    icon: IconVideo,
  },
  {
    label: "朋友",
    path: "/friend",
    component: Friend,
    icon: IconFriend,
  },
];

export const redirect: RedirectProps[] = [
  {
    path: "*",
    to: "/home",
  },
];

export interface Routers extends RouteProps {
  label?: string;
  icon?: string | SvgComponent;
  path?: string;
  children?: Routers[];
}
