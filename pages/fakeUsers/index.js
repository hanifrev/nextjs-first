import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  return (
    <div>
      {users.map((x) => (
        <Link href={`/fakeUsers/users/${x.id}`}>
          <a>
            <h3>{x.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
