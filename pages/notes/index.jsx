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
            <a>moon above</a>
          </Link>
        </li>
        <li>
          <Link href="/notes/fetchtest">
            <a>IVY</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;
