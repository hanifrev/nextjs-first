import axios from "axios";
import React, { useState } from "react";

const create = () => {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitArticle = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { data } = await axios.post(`${process.env.API_ENDPOINT}/posts`, {
      userId: userId,
      title: title,
      body: description,
    });
    await setArticle(JSON.stringify(data));
    await setIsLoading(false);
    event.target.reset();
  };

  return (
    <div>
      {article && <div>{article}</div>}
      {isLoading && <div>Loading...</div>}
      <form onSubmit={submitArticle}>
        <div>
          <label>User ID</label>
          <input onChange={(e) => setUserId(e.target.value)} required />
        </div>
        <div>
          <label>Title</label>
          <input onKeyUp={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea onKeyUp={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default create;
