import React from "react";
import Link from "next/link";

const postsId = ({ posts }) => {
  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <Link href="/fakeBlog">Go Back</Link>
    </div>
  );
};

export default postsId;

export async function getStaticProps(context) {
  const id = context.params.postsId;
  const results = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((r) => r.json());

  return {
    props: {
      posts: results,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (r) => r.json()
  );

  const paths = posts.map((x) => {
    return {
      params: {
        postsId: x.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
