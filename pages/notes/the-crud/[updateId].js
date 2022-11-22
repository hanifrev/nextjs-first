import axios from "axios";
import React, { useState } from "react";

const updateId = ({ data }) => {
  const [id, setId] = useState(data.id);
  const [userId, setUserId] = useState(data.userId);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.body);
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateArticle = async (e) => {
    e.preventDefault;
    setIsLoading(true);
    const { data } = await axios.put(
      `${process.env.API_ENDPOINT}/posts/${id}`,
      {
        userId: userId,
        title: title,
        body: description,
      }
    );
    await setArticle(JSON.stringify(data));
    await setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={updateArticle}>
        <div>
          <label> User ID </label>
          <select
            onChange={(e) => setUserId(e.target.value)}
            defaultValue={userId}
            required
          >
            <option value={1}>User ID 1</option>
            <option value={2}>User ID 2</option>
            <option value={3}>User ID 3</option>
          </select>
        </div>
        <div>
          <label> Title </label>
          <input
            type="text"
            onKeyUp={(e) => setTitle(e.target.value)}
            defaultValue={title}
            required
          />
        </div>
        <div>
          <label> Description </label>
          <textarea
            onKeyUp={(e) => setDescription(e.target.value)}
            defaultValue={description}
            required
          ></textarea>
        </div>
        <div>
          <button> SUBMIT </button>
        </div>
      </form>
    </div>
  );
};

export default updateId;

export async function getStaticPaths() {
  const { data } = await axios.get(`${process.env.API_ENDPOINT}/posts`);

  const paths = await data.map((item) => ({
    params: { updateId: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `${process.env.API_ENDPOINT}/posts/${params.updateId}`
  );

  return {
    props: {
      data: data || {},
    },
  };
}
