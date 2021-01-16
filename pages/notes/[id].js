import React from "react";
import { useRouter } from "next/router";
// import { useRouter } from "next/dist/next-server/server/router";

const Page = () => {
  const Router = useRouter();
  const { id } = Router.query;

  return (
    <div>
      <div>i will endure hide away</div>
      <div>the id : {id} </div>
    </div>
  );
};

export default Page;
