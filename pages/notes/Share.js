import React, { useState, useEffect } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Share = () => {
  const [theURL, setTheURL] = useState("");

  useEffect(() => {
    const url = window.location.href;
    console.log(url);
    setTheURL(url);
  }, []);

  console.log(theURL);

  const iconStyles = { color: "white", fontSize: "32px" };
  return (
    <div>
      <div>share test</div>
      <div>
        <FacebookShareButton url={theURL}>
          <FaFacebookSquare style={iconStyles} />
        </FacebookShareButton>
        <TwitterShareButton url={theURL}>
          <FaTwitter style={iconStyles} />
        </TwitterShareButton>
        <LinkedinShareButton url={theURL}>
          <FaLinkedin style={iconStyles} />
        </LinkedinShareButton>
        <EmailShareButton url={theURL}>
          <AiOutlineMail style={iconStyles} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default Share;
