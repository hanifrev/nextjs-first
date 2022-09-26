import React from "react";
import Link from "next/link";
// import absoluteUrl from "next-absolute-url";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

const Pages = ({ theData }) => {
  // const { origin } = absoluteUrl(req);
  // const apiURL = `${origin}/api/job.js`;
  // console.log(apiURL);

  const router = useRouter();
  const [ogUrl, setOgUrl] = useState("");

  // console.log(router);
  // console.log(router.pathname);
  // console.log(router.query);

  const [data, setData] = useState({});
  const getData = async () => {
    const response = await axios.get(`https://cms.roketin.com/homepage`);
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  // console.log(theData);

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);

  console.log(ogUrl);

  return (
    <div>
      <Head>
        <meta property="og:url" content={ogUrl} />
        <meta
          property="og:title"
          content={(theData.SEO && theData.SEO.metaTitle) || ""}
        />
        <meta
          property="og:description"
          content={(theData.SEO && theData.SEO.metaDescription) || ""}
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://www.spirit-of-metal.com/les%20goupes/O/Opeth/pics/359786_logo.jpg"
        />
        <link
          itemprop="thumbnailUrl"
          href="https://www.spirit-of-metal.com/les%20goupes/O/Opeth/pics/359786_logo.jpg"
        />
      </Head>
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
            <a>Quran</a>
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
        <li>
          <Link href="notes/Paginate">
            <a>Page</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Search">
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Search2">
            <a>Search 2</a>
          </Link>
        </li>
        <li>
          <Link href="notes/TabsCategory">
            <a>Tabs Category</a>
          </Link>
        </li>
        <li>
          <Link href="/CheckboxFilter">
            <a>Checkbox Filter</a>
          </Link>
        </li>
        <li>
          <Link href="/fakeUsers">
            <a>Fake Users</a>
          </Link>
        </li>
        <li>
          <Link href="/fakeBlog">
            <a>Fake Blog</a>
          </Link>
        </li>
        <li>
          <Link href="notes/TabsSection">
            <a>TabsSection</a>
          </Link>
        </li>
        <li>
          <Link href="notes/formtest">
            <a>Form Test</a>
          </Link>
        </li>
        <li>
          <Link href="notes/GSAP">
            <a>GSAP</a>
          </Link>
        </li>
        <li>
          <Link href="notes/Country">
            <a>Country</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pages;

export async function getServerSideProps() {
  const res = await fetch(`https://cms.roketin.com/homepage`);
  const theData = await res.json();

  return { props: { theData } };
}
