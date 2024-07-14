
import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/pranaygatkine/?hl=en" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/pranay.gatkine.9/" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/pranay-gatkine-92917421b" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/PranayGatkine" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.github.com/pranaygatkine" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="t.me/Pranaygatkine" target="_blank" className="items">
            <FaTelegram className="icons" />
          </a>
          <a href="Wa.me/+91-7798107346" target="_blank" className="items">
            <FaWhatsapp className="icons" />
          </a>

          <a
            href="mailto:pranaysnegatkine1020@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
