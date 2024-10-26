import React from 'react';
import { Link } from 'react-router-dom';
import kishore from "../../../images/kishore.jpg";
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
export const Kishore = () => {
  return (
    <>
       <div>
        <div className="overflow-hidden container d-flex justify-content-center">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5 p-4 rounded-5 shadow  ">
              <div className="w-75 mt-5 p-2" style={{marginLeft:"10%"}}>
                <img
                  src={kishore}
                  alt="Admin"
                  className="img-fluid rounded-3 ps-5 pe-5"
                />
              </div>
              <div className="row">
                <div className="row">
                  <h3 className="text-center mt-4">Kishore Sunchu</h3>
                </div>
                <div className="row ms-2 d-flex justify-content-center align-items-center">
                  <div className="col mt-4">
                    <label>Position</label>
                    <h6>Manager</h6>
                  </div>
                  <div className="col mt-4">
                    <label>DOB</label>
                    <h6>4-12-2003</h6>
                  </div>
                </div>
                <div className="row mt-5 ms-2">
                  <label>Social Media</label>
                  <div className="d-flex justify-content-around ">
                    <div>
                    <li className="list-inline-item">
                      <a href="https://github.com/kishore-sunchu" target="blank"><BsGithub/></a>
                    </li>
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/kishore-sunchu-781750222/" target="blank"><BsLinkedin/></a>
                    </li>                    
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/_kishore_sunchu_0426/" target="blank"><BsInstagram/></a>
                    </li>
                    </div>
                    <div>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/P1101Sunchu" target="blank"><BsTwitter/></a>
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
                  <h6>Hindi , English , Gujrati </h6>
                </div>
                <div className="col">
                  <label>Exprience</label>
                  <h6>4 Year's Exprience </h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Email</label>
                  <h6>kishore@gmail.com</h6>
                </div>
                <div className="col">
                  <label>Address</label>
                  <h6>Udhana,Surat-394107</h6>
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
                  <h6>05-10-2019</h6>
                </div>
                <div className="col">
                  <label>Department</label>
                  <h6>Marketing</h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Description</label>
                  <p>
                    Inbound marketing specialist with a proven track record of
                    driving traffic and leads to websites. Skilled in content
                    creation, email marketing, and social media marketing.
                    Passionate about helping businesses grow through inbound
                    marketing.
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

export default Kishore