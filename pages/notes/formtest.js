import React, { useState } from "react";

const formtest = () => {
  const [data, setData] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`${data.name} ${data.email} ${data.github} ${data.message}`);
  };
  return (
    <div>
      <video id="bg-video" autoPlay loop muted playsInline>
        {/* <source
          src="https://cms.roketin.com/uploads/homepage_ece3c2c3c4.webm"
          type="video/webm"
        /> */}
        <source
          src="https://static.videezy.com/system/resources/previews/000/002/004/original/20140614-SoudertonPA-YellowFlowersBreeze.mp4"
          type="video/mp4"
        />
      </video>
      <form onSubmit={onSubmit}>
        <span>
          <label>Name</label>
          <input
            type="text"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </span>
        <span>
          <label>Email</label>
          <input
            type="email"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </span>
        <span>
          <label>Github</label>
          <input
            type="text"
            // value="nothing"
            defaultValue=" "
            placeholder="zzz"
            onChange={(e) => setData({ ...data, github: e.target.value })}
          />
        </span>
        <span>
          <label>Message</label>
          <input
            type="text"
            required
            onChange={(e) => setData({ ...data, message: e.target.value })}
          />
        </span>
        <button type="submit">
          <div>Submit</div>
        </button>
      </form>
    </div>
  );
};

export default formtest;
