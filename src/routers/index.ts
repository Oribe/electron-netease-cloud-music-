import Friend from "@pages/Friend";
import Private from "@pages/Private";
import Video from "@pages/Video";
import Home from "@src/pages/Home";
import { RedirectProps, RouteProps } from "react-router-dom";

import Icon from "@assets/svg/svg_home.svg";

export const routers: Routers[] = [
  {
    label: "发现音乐",
    path: "/",
    component: Home,
    icon: Icon,
  },
  {
    label: "私人FM",
    path: "/private",
    component: Private,
  },
  {
    label: "视频",
    path: "/video",
    component: Video,
  },
  {
    label: "朋友",
    path: "/friend",
    component: Friend,
  },
];

export const redirect: RedirectProps[] = [
  {
    path: "*",
    to: "/",
  },
];

export interface Routers extends RouteProps {
  label?: string;
  icon?: string;
  path?: string;
  children?: Routers[];
}
