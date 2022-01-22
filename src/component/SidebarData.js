import React from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { MdAnalytics, MdDashboard, MdImage } from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/notes",
  },
  {
    title: "Mail",
    icon: <FaMailBulk />,
    link: "mail",
  },
  {
    title: "Analytics",
    icon: <MdAnalytics />,
    link: "analytics",
  },
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    link: "dashboard",
  },
  {
    title: "Images",
    icon: <MdImage />,
    link: "img",
  },
];
