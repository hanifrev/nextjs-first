import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Share = () => {
  const iconStyles = { color: "white", fontSize: "32px" };
  return (
    <div>
      <div>share test</div>
      <div>
        <FacebookShareButton>
          <FaFacebookSquare style={iconStyles} />
        </FacebookShareButton>
        <TwitterShareButton>
          <FaTwitter style={iconStyles} />
        </TwitterShareButton>
        <LinkedinShareButton>
          <FaLinkedin style={iconStyles} />
        </LinkedinShareButton>
        <EmailShareButton>
          <AiOutlineMail style={iconStyles} />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default Share;
