import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const index = ({ country }) => {
  const [search, setSearch] = useState("");

  const theRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  const x = gsap.utils.selector(theRef);

  // useEffect(() => {
  //   gsap.from(x(".theList"), {
  //     y: 200,
  //     duration: 1.5,
  //     stagger: 0.1,
  //     opacity: 0,
  //   });
  // }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".theList");
      boxes.forEach((box) => {
        gsap.fromTo(
          box,
          {
            y: 200,
            opacity: 0,
          },
          {
            y: 0,
            duration: 2,
            opacity: 1,
            scrollTrigger: {
              id: 1,
              trigger: box,
              start: "top bottom",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, theRef);
    return () => ctx.revert();
  }, []);

  const list = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gap: "4rem",
    paddingTop: "1rem",
  };

  return (
    <div ref={theRef}>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div style={list}>
        {country
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (
              val.name.common.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((x, index) => {
            return (
              <Link href={`/notes/Country/${x.name.common}`}>
                <div
                  className="theList"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "11rem",
                    cursor: "pointer",
                  }}
                >
                  <img style={{ width: "150px" }} src={x.flags.svg}></img>
                  {x.name.common}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const country = await fetch(`https://restcountries.com/v3.1/all`).then(
    (res) => res.json()
  );

  return {
    props: {
      country,
    },
  };
}
