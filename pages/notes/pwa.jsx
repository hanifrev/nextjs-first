import React from "react";
import Link from "next/link";

const Pages = () => {
  return (
    <div>
      <h2>Progressive Web App</h2>
      <ul>
        <li>
          <Link href="https://frontendmasters.com/courses/progressive-web-apps/defining-pwa/">
            <a>Frontend Master course link</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/mike-works/pwa-fundamentals">
            <a>Course repo</a>
          </Link>
        </li>
        <li>
          <Link href="https://mike.works/course/progressive-web-fundamentals-0d74af5">
            <a>Course outline</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;
