import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import smita from "../../../images/smita5.jpg";

export const Smita = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden container d-flex justify-content-center">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5 p-4 rounded-5 shadow  ">
              <div className="  mt-5 p-2  ">
                <img
                  src={smita}
                  alt="Admin"
                  className="img-fluid rounded-3 ps-5 pe-5"
                />
              </div>
              <div className="row">
                <div className="row">
                  <h3 className="text-center mt-4">Smita Subudhi</h3>
                </div>
                <div className="row ms-2 d-flex justify-content-center align-items-center">
                  <div className="col mt-4">
                    <label>Position</label>
                    <h6>Manager</h6>
                  </div>
                  <div className="col mt-4">
                    <label>DOB</label>
                    <h6>01-10-2003</h6>
                  </div>
                </div>
                <div className="row mt-5 ms-2">
                  <label>Social Media</label>
                  <div className="d-flex justify-content-around ">
                    <div>
                      <li className="list-inline-item">
                        <a href="https://github.com/maleswar" target="blank"><BsGithub /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/smita-subudhi-34b870249" target="blank"><BsLinkedin /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://instagram.com/maleswarsubudhi9" target="blank"><BsInstagram /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://x.com/subudhi_sm98167" target="blank"><BsTwitter /></a>
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
                  <h6>Hindi , English , Gujrati , Odia </h6>
                </div>
                <div className="col">
                  <label>Exprience</label>
                  <h6>2 Year's Exprience </h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Email</label>
                  <h6>smitasubudhi24@gmail.com</h6>
                </div>
                <div className="col">
                  <label>Address</label>
                  <h6>Amroli,Surat-394107</h6>
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
                  <h6>25-12-2019</h6>
                </div>
                <div className="col">
                  <label>Department</label>
                  <h6>IT</h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Description</label>
                  <p>
                    The IT department is responsible for the information technology (IT) infrastructure of a company or organization. This includes tasks such as maintaining hardware and software, providing technical support to users, and ensuring the security of the IT systems. The IT department also plays a role in developing and implementing new IT solutions to help the company achieve its business goals.
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

export default Smita