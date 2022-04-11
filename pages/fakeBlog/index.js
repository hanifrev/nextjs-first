import React from "react";
import Link from "next/link";

const index = ({ posts }) => {
  return (
    <div>
      {posts.map((x) => (
        <Link href={`/fakeBlog/posts/${x.id}`}>
          <a>
            <h2>{x.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (r) => r.json()
  );

  return {
    props: {
      posts,
    },
  };
}
