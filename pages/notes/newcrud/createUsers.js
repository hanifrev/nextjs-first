import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";

const createUsers = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`https://637b94246f4024eac2121bed.mockapi.io/dataUser`, {
      name,
      avatar,
    });
    router.push("/notes/newcrud").then(() => router.reload());
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Avatar</label>
          <input
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="link of image"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default createUsers;
