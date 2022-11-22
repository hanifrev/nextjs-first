import axios from "axios";
import Link from "next/link";
import { router } from "next/router";
import React, { useState } from "react";

const Crud3 = ({ data }) => {
  //   console.log(`${process.env.API_ENDPOINT}`);
  //   console.log(data);

  const [articles, setArticles] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  const deleteArticle = async (articleId) => {
    if (window.confirm("are u sure delete this item?")) {
      setIsLoading(true);
      const { res } = await axios.delete(
        `${process.env.API_ENDPOINT}/posts/${articleId}`
      );
      const newArticles = await articles.filter((item) => item.id != articleId);
      setArticles(newArticles);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Link href="/notes/the-crud/create">
        <button>CREATE</button>
      </Link>
      {articles.map((x) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "1rem",
              gap: "16px",
              border: "1px solid",
            }}
          >
            <div>{x.userId}</div>
            <div style={{ fontWeight: "700" }}>{x.id}</div>
            <div style={{ width: "270px" }}>{x.title}</div>
            <div style={{ width: "270px" }}>{x.body}</div>
            <div>
              <button onClick={() => router.push(`/notes/the-crud/${x.id}`)}>
                UPDATE
              </button>
              <button onClick={() => deleteArticle(x.id)}>DELETE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Crud3;

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/posts`);

  return {
    props: {
      data: data || {},
    },
  };
}
