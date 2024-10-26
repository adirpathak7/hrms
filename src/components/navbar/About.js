import React from "react";
import "./About.css";
import firstphoto from "../../images/Company.gif";
import advantages from "../../images/Advantages.gif";
import wipro from "../../images/wipro-logo-new-og-502x263.jpg";
import relaince from "../../images/Reliance-Industries-Limited-Logo.png";
import infosys from "../../images/logo-infosys.png";
import tcs from "../../images/TCS.NS_BIG-89c50e39.png";
import hdfc from "../../images/HDFC-Bank-logo.jpg";
import hul from "../../images/hul2.jpg";
import hrmslogo from "../../images/logo.png";

export default function About() {
  return (
    <main className="">
      <section className="p-5  mt-5 mb-5" id="firstSection">
        <div className="about-title" id="firstheader">
          <h1 className="text-center text-white">About US</h1>
          <p className="text-center text-white">
            " The HRMS that puts people first "
          </p>
        </div>
      </section>
      <section className="p-5 container mt-5">
        <div className="row ">
          <div className="col-lg-8 col-md-12 ">
            <div className="p-5">
              <h1 className="pb-5 text-info">Why Important HRMS System ? </h1>
              <p>
                "In today's competitive business environment, it is more
                important than ever to have a well-functioning HRMS system. A
                good HRMS system can help you streamline your HR processes,
                improve efficiency, and make better decisions about your
                workforce. If you are looking for an HRMS system that can help
                you achieve your business goals, then you need to check out our
                system."
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <div className="pt-3">
              <img src={firstphoto} alt="nbv" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-secondary-subtle mt-5">
        <div className="row ">
          <div className="col-lg-4 col-md-12 ">
            <div className="pt-3">
              <img src={advantages} alt="nbv" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 ">
            <div className="p-5 lh-lg">
              <h1 className="pb-5 text-info">Advantages of HRMS </h1>
              <ol>
                <li>
                  Streamlined HR Processes: HRMS automates tasks like payroll,
                  attendance tracking, and employee record-keeping, reducing
                  administrative burdens and ensuring accuracy.
                </li>
                <li>
                  Improved Data Management: Centralized databases help maintain
                  accurate employee records, making it easier to track
                  performance, manage benefits, and comply with legal
                  requirements.
                </li>
                <li>
                  Enhanced Decision-Making: HR analytics and reporting tools
                  provide valuable insights into workforce trends, aiding
                  strategic decision-making for talent acquisition and
                  retention.
                </li>
                <li>
                  Cost Efficiency: By automating HR tasks, HRMS reduces
                  operational costs associated with manual paperwork, errors,
                  and inefficiencies.
                </li>
                <li>
                  Employee Self-Service: Employees can access their own data,
                  request time off, and update personal information, empowering
                  them and reducing HR's workload.
                </li>
                <li>
                  Compliance and Security: HRMS helps ensure legal compliance
                  with labor laws and regulations while offering robust security
                  features to protect sensitive employee data.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 container mt-5">
        <div>
          <h1 className="text-info ">HRMS System used by companies : </h1>
          <div className="row">
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={wipro} alt="sdn,ds" className="img-fluid " />
              </div>
            </div>
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={relaince} alt="sdn,ds" className="img-fluid " />
              </div>
            </div>
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={infosys} alt="sdn,ds" className="img-fluid " />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={tcs} alt="sdn,ds" className="img-fluid " />
              </div>
            </div>
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={hdfc} alt="sdn,ds" className="img-fluid" />
              </div>
            </div>
            <div className="col ">
              <div className=" m-2 p-5 ms-5 me-5">
                <img src={hul} alt="sdn,ds" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="text-center text-lg-start text-white mt-4"
        style={{ backgroundColor: "#484a50" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-3"
          style={{ backgroundColor: "#17bebb" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href className="text-white me-4">
              <i className="bi bi-facebook" />
            </a>
            <a href className="text-white me-4">
              <i className="bi bi-twitter" />
            </a>
            <a href className="text-white me-4">
              <i className="bi bi-google" />
            </a>
            <a href className="text-white me-4">
              <i className="bi bi-instagram" />
            </a>
            <a href className="text-white me-4">
              <i className="bi bi-linkedin" />
            </a>
            <a href className="text-white me-4">
              <i className="bi bi-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">
                  <img
                    src={hrmslogo}
                    alt="Logo"
                    width={35}
                    className="ps-3 d-inline-block align-text-top img-fluid me-3"
                  />
                  HRMS
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "120px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  Elevate Your Organization's Efficiency and Productivity
                  Through Advanced HRMS Integration.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}

              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="bi bi-house-door-fill mr-3 " /> Surat, Gujrat
                  -394221, India
                </p>
                <p>
                  <i clasvsName="bi bi-envelope-open-fill mr-3" />
                  adiityarpathak7@gmail
                </p>
                <p>
                  <i className="bi bi-telephone-fill mr-3" /> + 91 7600307488
                </p>
                {/* <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p> */}
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}

        {/* Copyright */}
      </footer>
    </main>
  );
}
