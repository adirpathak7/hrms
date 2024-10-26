import React from 'react';
// import { Link } from 'react-router-dom';
import akash from "../../../images/Akash.jpg";
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
export const Akash = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden container d-flex justify-content-center">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5 p-4 rounded-5 shadow  ">
              <div className="  mt-5 p-2  ">
                <img
                  src={akash}
                  alt="Admin"
                  className="img-fluid rounded-3 ps-5 pe-5"
                />
              </div>
              <div className="row">
                <div className="row">
                  <h3 className="text-center mt-4">Akash Maurya</h3>
                </div>
                <div className="row ms-2 d-flex justify-content-center align-items-center">
                  <div className="col mt-4">
                    <label>Position</label>
                    <h6>Manager</h6>
                  </div>
                  <div className="col mt-4">
                    <label>DOB</label>
                    <h6>17-07-2003</h6>
                  </div>
                </div>
                <div className="row mt-5 ms-2">
                  <label>Social Media</label>
                  <div className="d-flex justify-content-around ">
                    <div>
                    <li className="list-inline-item">
                      <a href="https://dev-varma-ayush.pantheonsite.io/?s=GitHub" target="blank"><BsGithub/></a>
                    </li>
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/varma-ayush-045733219/" target="blank"><BsLinkedin/></a>
                    </li>                    
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/dev.varma_ji/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="blank"><BsInstagram/></a>
                    </li>
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/mr_official_ayu" target="blank"><BsTwitter/></a>
                    </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-6 col-md-6 mt-5 p-4 rounded-5 shadow  ms-4">
              <div className="row">
                <div className="">
                  <h5>Personal Details</h5>
                  <hr />
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Lanuages</label>
                  <h6>Hindi , English </h6>
                </div>
                <div className="col">
                  <label>Exprience</label>
                  <h6>6 Year's Exprience </h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Email</label>
                  <h6>akashmaurya63@gmail.com</h6>
                </div>
                <div className="col">
                  <label>Address</label>
                  <h6>Pandesara,Surat-394221</h6>
                </div>
              </div>
              <div className="row mt-5">
                <div className="">
                  <h5>Department Details</h5>
                  <hr />
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Hire Date</label>
                  <h6>10-01-2017</h6>
                </div>
                <div className="col">
                  <label>Department</label>
                  <h6>Finance</h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Description</label>
                  <p>
                    The finance department is responsible for the financial management of a company or organization. This includes tasks such as budgeting, accounting, treasury management, and risk management. The finance department also provides financial analysis and advice to other departments in the organization.
                    A good finance department is essential for the success of any company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Akash