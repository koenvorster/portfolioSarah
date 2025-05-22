import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
      <div className="card-contact">
        <h2 className="hero-h2">Location:</h2>


          <p className="card-text text-left">
            <FaMapMarkerAlt className="icon" size={30}/>
            <span> Belgium, Turnhout</span>
          </p>

        <div className="map-container">
          <iframe
              title="Google Maps - Turnhout"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.469768091091!2d4.937019315745091!3d51.32276097960244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14a5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sTurnhout!5e0!3m2!1sen!2sbe!4v1234567890123"
              width="300"
              height="280"
              allowFullScreen
              loading="lazy"
          ></iframe>
        </div>
      </div>
  );
};

export default ContactInfo;