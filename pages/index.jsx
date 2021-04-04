import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "1% 0% 0% 0%",
        lineHeight: "2em",
      }}
    >
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
