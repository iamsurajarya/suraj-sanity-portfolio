import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXing } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/iamsurajarya" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.xing.com/profile/Suraj_Suraj2/cv" target="_blank" rel="noreferrer">
          <FaXing />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/surajrec/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
