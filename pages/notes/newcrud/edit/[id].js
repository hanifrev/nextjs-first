import axios from "axios";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const id = ({ data }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const router = useRouter();

  //   useEffect(() => {
  //     setId(localStorage.getItem("id"));
  //   });
  useEffect(() => {
    setName(data.name);
    setAvatar(data.avatar);
  }, []);

  console.log(data.id);

  const updateData = async (e) => {
    e.preventDefault();
    axios.put(
      `https://637b94246f4024eac2121bed.mockapi.io/dataUser/${data.id}`,
      {
        name,
        avatar,
      }
    );
    router.push("/notes/newcrud").then(() => router.reload());
  };
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Avatar</label>
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="link of image"
          />
        </div>
        <div>
          <button onClick={updateData}>UPDATE</button>
        </div>
      </form>
    </div>
  );
};

export default id;

export async function getServerSideProps(context) {
  const { id } = context.query;
  if (id) {
    const res = await fetch(
      `https://637b94246f4024eac2121bed.mockapi.io/dataUser/${id}`
    );
    const data = await res.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { data },
    };
  }
}
