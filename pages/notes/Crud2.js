import axios from "axios";
import React, { useState, useEffect } from "react";

const Crud2 = () => {
  const [first, setFirst] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://todo.api.devcode.gethired.id/activity-groups?email=dawnraidband@gmail.com"
      );
      const data = await res.json();
      console.log(data);
      setFirst(data);
      // console.log(first.data[2].title)
    };
    fetchData();
    setLoading(false);
  }, []);

  const onAdd = async () => {
    const activity = {
      title: "New Act",
      email: "dawnraidband@gmail.com",
    };
    try {
      await axios.post(
        "https://todo.api.devcode.gethired.id/activity-groups",
        activity
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(first.data[0].title)

  return (
    <div>
      {loading ? (
        <p>Loading. . .</p>
      ) : (
        <div>
          {first.data &&
            first.data.map((x) => {
              return <div key={x.id}>{x.title}</div>;
            })}
        </div>
      )}

      <div>
        <button onClick={() => onAdd()}>ADD</button>
      </div>
    </div>
  );
};

export default Crud2;
