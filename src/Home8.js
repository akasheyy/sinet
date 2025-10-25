import React from "react";
import "./Home.css"; 

const Home8 = () => {
  return (
    <div>
      <img src="sl.webp" className="s1im" alt="sl" />
      <h4 className="join2">SINET ADVANTAGES</h4>
      <p className="p">(20 Reasons to Join Sinet Institute.)</p>

      <div className="sinet-box">
        <div className="sinet-section blue">
          Sinet is an <span className="bold">ISO 9001: 2015 Certified</span> educational organization.
        </div>
        <div className="sinet-section">
          Sinet academic team has <span className="bold">20+ years of experience</span> in education and training.
        </div>
        <div className="sinet-section blue">
          Sinet is the only <span className="highlight">WATO Guarantee</span> Offered Institute (Warranty against Technology Obsolescence).
        </div>
        <div className="sinet-section">
          Sinet courses are <span className="bold">highly affordable</span> and give value for money.
        </div>
        <div className="sinet-section blue">
          24 Hour broadband connection and <span className="highlight">Wi-Fi enabled campus</span>.
        </div>
        <div className="sinet-section">
          Sinet has collaborative associations with global education leaders.
        </div>
        <div className="sinet-section blue">
          Regional tie-ups with Government agencies for education and training.
        </div>
        <div className="sinet-section">
          Sinet is a <span className="bold">licensed SAP user</span> since 2012.
        </div>
        <div className="sinet-section blue">
          Sinet is one of the certification facilitators of <span className="highlight">global certification</span> leaders like Microsoft, Oracle, Redhat, Cisco, SAP, etc.
        </div>
        <div className="sinet-section">
          Sinet offers effective <span className="bold">job placement training</span>, self-internship, experience certificates after job training, and job searching support.
        </div>
        <div className="sinet-section blue">
          Sinet provides <span className="highlight">IEEE project solutions</span> and assistance for engineering students.
        </div>
        <div className="sinet-section">
          Sinet gives <span className="bold">educational loans at 0% interest</span>.
        </div>
        <div className="sinet-section blue">
          Sinet runs <span className="highlight">"Earn while learn"</span> support program for financially poor students.
        </div>
        <div className="sinet-section">
          Sinet maintains academically and professionally <span className="bold">qualified and experienced faculties</span>.
        </div>
        <div className="sinet-section blue">
          Sinet is one of the <span className="highlight">top-ranked educational brands</span> in India by leading public review companies.
        </div>
        <div className="sinet-section">
          Sinet Education Trained more than <span className="bold">10,000+ Students</span>.
        </div>
        <div className="sinet-section blue">
          <span className="highlight">Internship</span> Facility available for selected Courses.
        </div>
        <div className="sinet-section">
          Sinet Conducts <span className="bold">Free Job Placement</span> and Skill enhancement Training.
        </div>
        <div className="sinet-section blue">
          Sinet Education offers <span className="highlight">Best Alumni services</span>.
        </div>
        <div className="sinet-section">
          Active <span className="bold">Job Placement Cell</span> with 100% Assistance up to getting hired.
        </div>
      </div>

      <br />
      <br />

      <div className="review-section">
        <div className="review-left">
          {/* Google Review Image */}
          <img src="Sgoogle.webp" alt="Google Reviews" />
          <p>
            SINET Institute has more than<br /> 
            <span>1900 Google Five-Star reviews!</span>
          </p>
        </div>

        <div className="review-map">
          {/* Google Map Embed */}
          <iframe
            src="https://maps.google.com/maps?q=SINET%20-%20SAP%2C%20Accounting%2C%20Python%2C%20CCNA%20%26%20Digital%20Marketing%20Training%20Institute%20in%20Perinthalmanna&output=embed"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home8;