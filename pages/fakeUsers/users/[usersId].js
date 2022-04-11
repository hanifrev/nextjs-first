import React from "react";
import Link from "next/link";

const usersId = ({ users }) => {
  return (
    <div>
      <h3>{users.name}</h3>
      <p>{users.username}</p>
      <p>{users.email}</p>
      <p>{users.phone}</p>
      <Link href="/fakeUsers">Go Back</Link>
    </div>
  );
};

export default usersId;

export async function getStaticPaths() {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (r) => r.json()
  );

  const paths = users.map((x) => {
    return {
      params: {
        usersId: x.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.usersId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((r) => r.json());

  return {
    props: {
      users: res,
    },
  };
}
