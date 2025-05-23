import React from "react";

const ContactSection: React.FC = () => {
    return (
        <div className="sectionContainer3">
            <div className="cards-container">
                {/* Contact Card */}
                <div className="cardcontact">
                    <h2 className="card-title">Hello, I'm Sarah</h2>
                    <img
                        src="/assets/img/foto/sarah1.jpg"
                        alt="Sarah in a personal setting"
                        className="img_me"
                    />

                    <p className="card-text text-left">
                        I am always open to new opportunities and collaborations. Whether you have a question, a project
                        in mind, or just want to say hello, don't hesitate to reach out!
                        Feel free to reach out through any of the platforms!
                    </p>

                </div>

                {/* Contact Information */}

                <div className="cardcontact">
                    <h2 className="card-title">Connect with Me:</h2>
                    <div className="text-left">

                        <p className="card-text pt-5">
                            <a className="fab fa-linkedin icon" href="https://www.linkedin.com/in/sarah-janssen-27566a266/"></a>
                            <a className="fab fa-github icon" href="https://github.com/Sarah-Janssen"></a>
                            <a className="fab fa-instagram icon" href="https://www.instagram.com/janssen_sarah/"></a>
                            <a className="fas fa-envelope icon " href="mailto:janssen.sarah1991@gmail.com"></a>
                        </p>
                    </div>

                </div>


                {/* Google Maps */}
                <div className="cardcontact">
                    <h2 className="card-title">Location:</h2>
                    <div className="text-left">
                        <p className=""><i className="fas fa-Location "></i>Belgium, Turnhout</p>
                        <p></p>
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
            </div>
        </div>
    )
        ;
};

export default ContactSection;