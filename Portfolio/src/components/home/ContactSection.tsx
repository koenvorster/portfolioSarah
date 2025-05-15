import React from "react";

const ContactSection: React.FC = () => {
    return (
        <div className="sectionContainer3">
            <div className="cards-container">
                {/* Contact Card */}
                <div className="cardcontact">
                    <h2 className="card-title">Connect with Me</h2>
                    <img
                        src={"/src/assets/img/foto/sarah1.jpg"}
                        alt="Sarah in a personal setting"
                        className="img_me"
                    />
                    <div className="social-icons">
                        <a href="mailto:Sarahjanssen@gmail.com" aria-label="Email Sarah Janssen">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                    <p className="card-text text-left">
                        I am always open to new opportunities and collaborations. Whether you have a question, a project
                        in mind, or just want to say hello, don't hesitate to reach out!
                        Feel free to reach out through any of the platforms!
                    </p>

                </div>

                {/* Google Maps */}
                <div className="cardcontact">
                    <h2 className="card-text">
                        You can reach me at:
                    </h2>
                    <div className="text-left">
                    <p><i className="fas fa-envelope "></i> Sarahjanssen1991@gmail.com</p>
                    <p><i className="fas fa-phone "></i>Given via email</p>
                    <p className="">Location</p>
                    <p> <i className="fas fa- "></i>Belgium, Turnhout</p>
                    </div>
                    <iframe
                        title="Google Maps - Turnhout"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.469768091091!2d4.937019315745091!3d51.32276097960244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14a5b5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTurnhout!5e0!3m2!1sen!2sbe!4v1234567890123"
                        width="380"
                        height="260"
                        style={{border: 15}}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Information */}

            </div>
        </div>
    )
        ;
};

export default ContactSection;