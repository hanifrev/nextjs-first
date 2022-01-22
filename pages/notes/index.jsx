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
          <Link href="notes/[id]" as={"/notes/btbam"}>
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
            <a>Data fetching</a>
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
        <li>
          <Link href="notes/hookpract">
            <a>Hook</a>
          </Link>
        </li>
        <li>
          <Link href="notes/fetch2">
            <a>Fetch2</a>
          </Link>
        </li>
        <li>
          <Link href="notes/cat">
            <a>Cat Fact</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Crud">
            <a>Crud</a>
          </Link>
        </li>
        <li>
          <Link href="notes/adzan">
            <a>Adzan</a>
          </Link>
        </li>
        <li>
          <Link href="notes/mboh">
            <a>Crud2</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Crud2">
            <a>Crud3</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Weather">
            <a>Weather</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;
