import React from "react";
import Articles from "../../src/component/Articles";

function Ivy({articles}) {
  
  // console.log(articles);

  return (

    <div>
      <Articles articles={articles} />
    </div>
  );
}

export default Ivy;

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const articles = await res.json()
  
  return {
    props: {
      articles
    }
  }
}