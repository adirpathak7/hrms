import React from 'react';
// import { Link } from 'react-router-dom';
import './Profile.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import adi from "../../images/adi87.jpg";

export const Profile = () => {


  return (
    <>
       <div>
        <div className="overflow-hidden container d-flex justify-content-center">
          <div className="row  d-flex justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6 mt-5 p-4 rounded-5 shadow  ">
              <div className="  mt-5 p-2  ">
                <img
                  src={adi}
                  alt="Admin"
                  className="img-fluid rounded-3 ps-5 pe-5"
                />
              </div>
              <div className="row">
                <div className="row">
                  <h3 className="text-center mt-4">Aaditya Pathak</h3>
                </div>
                <div className="row ms-2 d-flex justify-content-center align-items-center">
                  <div className="col mt-4">
                    <label>Position</label>
                    <h6>Admin</h6>
                  </div>
                  <div className="col mt-4">
                    <label>DOB</label>
                    <h6>14-10-2003</h6>
                  </div>
                </div>
                <div className="row mt-5 ms-2">
                  <label>Social Media</label>
                  <div className="d-flex justify-content-around ">
                    <div>
                      <li className="list-inline-item">
                        <a href="https://github.com/adirpathak7" target="blank"><BsGithub /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/aaditya-pathak-5708a628b" target="blank"><BsLinkedin /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://instagram.com/mr.adiiii7" target="blank"><BsInstagram /></a>
                      </li>
                    </div>
                    <div>
                      <li className="list-inline-item">
                        <a href="https://x.com/Adiiiirp7" target="blank"><BsTwitter /></a>
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
                  <h6>5 Year's Exprience </h6>
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Email</label>
                  <h6>adityarpathak7@gmail.com</h6>
                </div>
                <div className="col">
                  <label>Address</label>
                  <h6>Pandesara,Surat-394221</h6>
                </div>
              </div>
              <div className='row ps-5 mt-5'>
               <label>Specialzation</label> <br></br>
               <b>Information Technology</b><br></br><br></br>
               <p>
               Web Developer is a highly skilled professional with expertise in a diverse set of programming languages and technologies. With proficiency in <b>Java, React, JavaScript, MySQL, PHP, HTML, Bootstrap, and CSS </b> they are well-equipped to tackle a wide range of web development projects. Their deep knowledge of these languages and frameworks allows them to create dynamic, responsive, and visually appealing web applications. Whether it's crafting interactive user interfaces with React, optimizing database performance with MySQL, or ensuring seamless functionality with JavaScript, this web developer plays a crucial role in enhancing the organization's online presence and digital capabilities. Their ability to harness the power of these technologies makes them an invaluable asset to the IT department, contributing to the success and innovation of the company's digital initiatives.
               </p>
              </div>
              {/* <div className="row mt-5">
                <div className="">
                  <h5>Department Details</h5>
                  <hr />
                </div>
              </div>
              <div className="row ps-5 mt-4">
                <div className="col">
                  <label>Hire Date</label>
                  <h6>12-2-2021</h6>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile