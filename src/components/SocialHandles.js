import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialHandles = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="flex gap-5 my-4">
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://github.com/Harsh9327" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://www.linkedin.com/in/harsh-mungra-341a31226/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        {/* <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://discordapp.com/users/talakolavijay" rel="noreferrer" target="_blank">
          <FaDiscord />
        </a> */}
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://www.instagram.com/harshmungra255/?hl=en" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://x.com/harsh_mungra" rel="noreferrer" target="_blank">
          <FaXTwitter />
        </a>
    </div>
  )
}

export default SocialHandles