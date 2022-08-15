import React from 'react';
import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Z&N Creative All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default Footer