import React from "react";
import "./Home.css";

const Footer1 = () => {
  return (
    <div>
      <div className="contact-section">
        <h2>Contact US!</h2>

        <div className="contact-grid">
          {/* Perinthalmanna */}
          <div className="contact-box">
            <h3>
              <i className="fas fa-map-marker-alt location-icon"></i>
              Perinthalmanna
            </h3>
            <p>MALAPPURAM</p>
            <p>
              SINET Education,<br />
              First Floor, City Complex, Near Traffic Junction,<br />
              Calicut Road, Perinthalmanna,<br />
              Malappuram DT, Kerala, India. Pin 679322
            </p>
            <p>
              <i className="fas fa-mobile-alt phone-icon"></i> 8086 800 700
            </p>
            <p>
              <i className="fas fa-mobile-alt phone-icon"></i> 7059 800 700
            </p>
            <p>
              <i className="fas fa-mobile-alt phone-icon"></i> 9946 668 186
            </p>
            <p>
              <i className="fas fa-phone-alt phone-icon"></i> 04933 227 816
            </p>
            <p className="email">info@sinet.in</p>
          </div>

          {/* Manjeri */}
          <div className="contact-box">
            <h3>
              <i className="fas fa-map-marker-alt location-icon"></i>
              Manjeri
            </h3>
            <p>MALAPPURAM</p>
            <p>
              SINET Education,<br />
              2nd Floor, MKM Complex, Above SBI ATM,<br />
              Opp New Bus Stand, Pandikkad Road, Manjeri,<br />
              Malappuram DT, Kerala, India
            </p>
            <p>
              <i className="fas fa-mobile-alt phone-icon"></i> 8943 800 700
            </p>
            <p>
              <i className="fas fa-mobile-alt phone-icon"></i> 9946 668 186
            </p>
          </div>

          {/* Affiliates */}
          <div className="contact-box">
            <h3>SINET Affiliate Educational Services available:</h3>
            <p>
              <i className="fas fa-map-marker-alt location-icon"></i>
              Kuttippuram, Edappal, Valancheri,<br />
              Malappuram, Nilambur, Mannarkad, Pattambi,<br />
              Cherpulassery, Wandoor, Pandikkad, Gudallore
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://facebook.com"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/aka.sheyyy_?igsh=MXd1azRlM2Vjejh0dw=="
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            className="youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://wa.me/918086800700"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;