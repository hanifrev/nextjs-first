import React from "react";
import Link from "next/link";

const Pages = () => {
  return (
    <div>
      <div>The Lotus Eater</div>
      <ul>
        <li>
          <Link href="/notes/[id]" as={`/notes/april-etheral`}>
            <a>april ethereal</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/[id]" as={"/notes/btbam"}>
            <a>between the buried and me</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/evo">
            <a>JS hard parts v2</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/fetchtest">
            <a>Intro to nextjs</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/intreact_fm">
            <a>Intermediate React v2 Frontend Master</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/IntroReactV6">
            <a>Intro React v6 Frontend Master</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/pwa">
            <a>Progressive Web App</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/getify_course">
            <a>Getify Course Related</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;
