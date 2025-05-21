import  { FC } from "react";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone} from "react-icons/fa";
import {Link} from 'react-router-dom'


const Footer: FC = () => {
    return (
        <footer className="footer ">
            <div className="container ">
                <div className="footer-links">

                    <Link to={"/"} className="text-sm">Home</Link>
                    <Link to={"About"} className="text-sm">About</Link>
                    <Link to={"Cv"} className="text-sm">Download CV</Link>
                    <Link to={"Contact"} className="text-sm">Contact</Link>
                    <Link to={"BlogOverview"} className="text-sm">Blog</Link>
                </div>
                <div className="">
                    {/* About Section */}

                    <h4 className=" text-subtitel2">
                        Passionate about creating visually appealing and user-friendly interfaces, combining creativity
                        with technical expertise.
                    </h4>

                </div>


                {/* Contact Info Section */}

                {/* Social Media Links */}

            </div>
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

            <div className="text-right">

                <p className="text-sm"><FaEnvelope size={20} className="location-icon"/> sarah.janssen@gmail.com</p>
                <p className="text-sm"><FaLocationArrow size={20} className="location-icon"/> Belgium, Turnhout</p>
                <p className="text-sm"><FaPhone size={20} className="location-icon"/> +32 476 23 45 67</p>


            </div>
            <img src="/assets/img/foto/logo/LogoSJ_white.png" alt="Profile" className="logo"/>
            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm">
                <p>© 2025 Sarah Janssen. All rights reserved.</p>
            </div>


        </footer>
    );
};

export default Footer;