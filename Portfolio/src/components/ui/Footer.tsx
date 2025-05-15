import React, { FC } from "react";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow} from "react-icons/fa";

const Footer: FC = () => {
    return (
        <footer className="footer ">
            <div className="container ">
                <div className="">
                    {/* About Section */}

                    <h4 className=" ">
                        Passionate about creating visually appealing and user-friendly interfaces, combining creativity
                        with technical expertise.
                    </h4>
                </div>


                {/* Contact Info Section */}

                {/* Social Media Links */}

                <div>

                    <p className="text-sm"> sarah.janssen@gmail.com</p>
                    <p className="text-sm"> Belgium, Turnhout</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin size={30}/>
                        </a>
                        <a href="https://www.instagram.com/your-instagram-profile" target="_blank"
                           rel="noopener noreferrer">
                            <FaInstagram size={30}/>
                        </a>
                        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30}/>
                        </a>
                    </div>

                </div>

            </div>


            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm">
                <p>© 2025 Sarah Janssen. All rights reserved.</p>
            </div>
            <img src="/src/assets/img/foto/logo/logoSJ_white.png" alt="Profile" className="logo"/>

        </footer>
    );
};

export default Footer;