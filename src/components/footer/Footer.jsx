import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    &copy; Prateek Movix 2023
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/prateekkumaroriginal" target="_blank" className="icon">
                        <span >
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://www.instagram.com/prateek.kumar.original/" target="_blank" className="icon">
                        <span className="icon">
                            <FaInstagram />
                        </span>
                    </a>
                    <a href="https://twitter.com/PRATEEK29203194" target="_blank" className="icon">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/prateek-kumar-original/" target="_blank" className="icon">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;