import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "1% 0% 0% 0%",
        lineHeight: "2em",
        height: "100vh",
      }}
    >
      <Head>
        <meta property="og:site_name" content="Code Playground" />
        <meta property="og:title" content="The Playground" />
        <meta
          property="og:description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://www.spirit-of-metal.com/les%20goupes/O/Opeth/pics/359786_logo.jpg"
        />
        <link
          itemprop="thumbnailUrl"
          href="https://www.spirit-of-metal.com/les%20goupes/O/Opeth/pics/359786_logo.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:updated_time" content="updatedtime" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <h2>W E L C O M E</h2>
      <h3>
        This is Hanifrev's code playground, in this repo I mess around with code
        while learning (mostly Javascript, React, Next JS, etc), <br />
        So you can call this a learning repo (or whatever it is)
        <br />
        So click link below to see some ..... i don't know, just click it!
      </h3>
      <form action="/notes">
        <button
          style={{
            background: "transparent",
            margin: "auto",
            textDecoration: "none",
            padding: "3px 5px",
            borderRadius: "6px",
            border: "2px solid #000",
            fontSize: "14px",
          }}
        >
          <Link href="/notes">CODE PLAYGROUND / LEARNING REPO</Link>
        </button>
      </form>
    </div>
  );
};

export default Page;
