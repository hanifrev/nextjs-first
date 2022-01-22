import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import Link from "next/link";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="sidebar">
      <ul className="sidelist">
        {SidebarData.map((x, key) => {
          return (
            <Link href={x.link}>
              <li
                key={key}
                //   onClick={() => window.location.pathname = x.link}
                className="row"
              >
                <div id="icon">{x.icon}</div>
                <div id="title">
                  <a>{x.title}</a>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
