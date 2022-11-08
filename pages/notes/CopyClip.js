import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyClip = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState("");
  const [dataVal, setDataVal] = useState("");

  useEffect(() => {
    console.log(document.querySelector("#z").getAttribute("data-value"));
    setDataVal(document.querySelector("#z").getAttribute("data-value"));
  }, []);

  console.log(dataVal);

  const dummy = [
    {
      text: "qwerty",
    },
  ];

  return (
    <div>
      <div id="z" data-value={dummy[0].text}>
        {dummy[0].text}
      </div>
      <CopyToClipboard text={dataVal}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAGZHR7Rtt9kUzM8WxWD2a48TZB-tzWQrb1KMFwk&s" />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default CopyClip;
