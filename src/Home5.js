import React from "react";
import "./Home.css";
import { toggleAccordion } from "./sinetJS";  // import the function

const Home5 = () => {
  return (
    <div>
      <h2 className="join">Short Term Courses</h2>
      <p className="p">
        "Select our tailor-made, industry-endorsed crash course programs with Certification."
      </p>

      <div className="accordion-section">
        {/* Financial Accounting Courses */}
        <button
          className="accordion-button"
          onClick={(e) => toggleAccordion(e.target)}
        >
          Financial Accounting Courses
        </button>
        <div className="accordion-content">
          <ul>
            <li>SAP FICO Course</li>
            <li>SAP MM Course</li>
            <li>SAP Logistics (SAP Business One) Course</li>
            <li>SAP Finance and Banking (SAP Business One) Course</li>
            <li>SAP Logistics and Financials with Banking (SAP Business One) Course</li>
            <li>Tally Prime ERP GST GCC VAT Course</li>
            <li>Sage 50 Course</li>
            <li>QuickBooks Course</li>
            <li>MYOB Course</li>
            <li>Manual Accounting Course</li>
            <li>GST Taxation Course</li>
            <li>VAT Taxation Course</li>
            <li>Wings Course</li>
            <li>Advance Excel Course</li>
            <li>e-Commerce</li>
            <li>SAP SD Course</li>
          </ul>
        </div>

        {/* Software Development Courses */}
        <button
          className="accordion-button"
          onClick={(e) => toggleAccordion(e.target)}
        >
          Software Development Courses
        </button>
        <div className="accordion-content">
          <ul>
            <li>Python MySQL Window Programming Course</li>
            <li>Python Django MySQL MVC Development Course</li>
            <li>PHP MySQL Web Application Development Course</li>
            <li>Codeigniter PHP MVC Course</li>
            <li>Laravel PHP MVC Course</li>
            <li>Microsoft ASP.Net - SQL Server Course</li>
            <li>ASP.Net MVC - SQL Server Course</li>
            <li>Web Designing Html Bootstrap JQuery Course</li>
            <li>C++ Programming Course</li>
            <li>C Programming Course</li>
            <li>Advance JAVA JSP Servlets Struts EJB Course</li>
            <li>C#.Net SQL Server Course</li>
            <li>Java MySQL Programming Course</li>
            <li>Oracle SQL Mapped to OCP Course</li>
            <li>Oracle DBA Mapped to OCP Course</li>
            <li>Microsoft SQL Server DBA Course</li>
            <li>Microsoft Advance Excel Course</li>
            <li>Microsoft Office (MS Office) Course</li>
          </ul>
        </div>

        {/* Networking Cloud Courses */}
        <button
          className="accordion-button"
          onClick={(e) => toggleAccordion(e.target)}
        >
          Networking Cloud Courses
        </button>
        <div className="accordion-content">
          <ul>
            <li>C C N P ( Routing & Switching ) Course</li>
            <li>C C N A ( Routing & Switching ) Course</li>
            <li>M C S E 2016 Course</li>
            <li>M C P: Microsoft Windows Server Course ( Exam: 70-740 )</li>
            <li>M C P: Microsoft Windows Server Course ( Exam: 70-741 )</li>
            <li>M C P: Microsoft Windows Server Course ( Exam: 70-742 )</li>
            <li>M C P: Microsoft Exchange Server Course ( Exam: MCP 70-345 )</li>
            <li>Hardware Course ( Mapped to CompTia A+ )</li>
            <li>Networking Course ( Mapped to CompTia Network+ )</li>
            <li>VMWare VCA Course</li>
            <li>Laptop board level Course</li>
            <li>CCTV Course</li>
            <li>Linux RH033 | RH133 | RH 253</li>
            <li>A W S Course</li>
          </ul>
        </div>

        {/* CAD and Multimedia Courses */}
        <button
          className="accordion-button"
          onClick={(e) => toggleAccordion(e.target)}
        >
          CAD and Multimedia Courses
        </button>
        <div className="accordion-content">
          <ul>
            <li>Photoshop</li>
            <li>Corel Draw</li>
            <li>InDesign</li>
            <li>Illustrator</li>
            <li>DTP</li>
            <li>Premier</li>
            <li>Edius</li>
            <li>3ds Max</li>
            <li>CAD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home5;