import axios from "axios";
import React, { useState } from "react";

const createUsers = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `https://637b94246f4024eac2121bed.mockapi.io/dataUser`,
      data: {
        name: data.name,
        avatar: data.avatar,
      },
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div>
          <label>Avatar</label>
          <input
            onChange={(e) => setData({ ...data, avatar: e.target.value })}
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
