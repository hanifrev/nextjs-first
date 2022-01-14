import React from 'react'
import { FaHome, FaMailBulk } from "react-icons/fa";
import { MdAnalytics, MdDashboard, MdImage } from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        icon: <FaHome />,
        link: "notes/home"
    },
    {
        title: "Mail",
        icon: <FaMailBulk />,
        link: "notes/mail"
    },
    {
        title: "Analytics",
        icon: <MdAnalytics />,
        link: "notes/analytics"
    },
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        link: "notes/dashboard"
    },
    {
        title: "Images",
        icon: <MdImage />,
        link: "notes/img"
    },
]
