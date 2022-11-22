import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const index = ({ data }) => {
  const [userData, setUserData] = useState(data);

  console.log(`${process.env.API_ENDPOINT}`);

  const updatedData = async () => {
    const res = await fetch(
      `https://637b94246f4024eac2121bed.mockapi.io/dataUser`
    );
    const data = await res.json();
    // const data = await axios.get(
    //   `https://637b94246f4024eac2121bed.mockapi.io/dataUser`
    // );

    setUserData(data);
  };

  useEffect(() => {
    setUserData(data);
  }, []);

  const onDelete = async (id) => {
    await axios
      .delete(`https://637b94246f4024eac2121bed.mockapi.io/dataUser/${id}`)
      .then(() => {
        updatedData();
      });
  };

  return (
    <div>
      <Link href="/notes/newcrud/createUsers">
        <button>NEW USERS</button>
      </Link>
      <div style={{ paddingTop: "1rem" }}>
        {userData.map((x) => {
          return (
            <div style={{ display: "flex" }}>
              <img src={x.avatar} style={{ width: "128px", height: "128px" }} />
              <div>
                <h2>{x.name}</h2>
                <Link href={`/notes/newcrud/edit/${x.id}`}>
                  <button style={{ height: "13px" }}>EDIT</button>
                </Link>
                <button
                  style={{ height: "13px" }}
                  onClick={() => onDelete(x.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.API_DATA}/dataUser`);
  return {
    props: {
      data: data || {},
    },
  };
}
