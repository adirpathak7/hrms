import React from 'react'
import { Link } from 'react-router-dom';
import "./Admindashboadr.css";
import adi from "../../images/adi87.jpg";
import smita from "../../images/smita5.jpg";
import deva from "../../images/deva1.jpg";
import { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import CountUp from 'react-countup';

export const Admindashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [totalAnnualSalary, setTotalAnnualSalary] = useState(0);

  useEffect(() => {
    // Fetch total number of employees
    fetch("http://localhost:5000/getTotalEmployees")
      .then((response) => response.json())
      .then((data) => {
        setTotalEmployees(data.totalEmployees);
      })
      .catch((error) => console.error("Error fetching total employees: ", error));

    // Fetch total salary of all employees
    fetch("http://localhost:5000/getTotalSalary")
      .then((response) => response.json())
      .then((data) => {
        setTotalSalary(data.totalSalary);
      })
      .catch((error) => console.error("Error fetching total salary: ", error));

    // Fetch total annual salary
    fetch("http://localhost:5000/getTotalAnnualSalary")
      .then((response) => response.json())
      .then((data) => {
        setTotalAnnualSalary(data.totalAnnualSalary);
      })
      .catch((error) => console.error("Error fetching total annual salary: ", error));
  }, []);
  return (
    <>
      <main className=" ">
        <section className="container shadow mt-5 bg-light  rounded-5 main1">
          <div className="row ps-3 pe-3 p-5">
            <div
              className="col me-3 mb-1 p-3  rounded-3"
              style={{ backgroundColor: "#f04c63" }}
            >
              <h2 className="text-white text-center mt-4">Total Employees</h2>
              <h4 className="text-white text-center">
                <CountUp start={0} end={totalEmployees} duration={2} />
              </h4>
            </div>
            <div className="col me-3 p-3 mb-1 bg-warning rounded-3">
              <h2 className="text-white text-center mt-4">Total Salary</h2>
              <h4 className="text-white text-center">
                <CountUp start={0} end={totalSalary} duration={2} />
              </h4>
            </div>
            <div className="col mb-1 p-3 bg-info rounded-3">
              <h2 className="text-white text-center mt-4">Annual Salary</h2>
              <h4 className="text-white text-center">
                <CountUp start={0} end={totalAnnualSalary} duration={2} />
              </h4>
            </div>
          </div>
        </section>
        <section className="main1 mt-5">
          <div class="parallax"></div>

          <div class=" ">
            <div className="row bg-light mt-5 p-5 m-3 shadow">
              <div className="col  ">
                <div>
                  <div className="container mt-2">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 ">
                        <div className="card mb-5">
                          <div className="card-header bg-info-subtle">
                            <h5 className="card-title">All Department's</h5>
                          </div>
                          <div className="card-body text-center">
                            <ul className="list-group">
                            <Link className='decoration' to="/dashboard/it">
                              <li className="list-group-item pointer-events: none">
                                <div className="media">
                                  <div className="media-body">
                                    <h5 className="mt-0">IT</h5>
                                  </div>
                                </div>
                              </li>
                              </Link>
                              <Link className='decoration' to="/dashboard/hr">
                              <li className="list-group-item">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">HR</h5>
                                    </div>
                                  </div>
                              </li>
                              </Link>
                              <Link className='decoration' to="/dashboard/marketing">
                              <li className="list-group-item">
                                <div className="media">
                                  <div className="media-body">
                                    <h5 className="mt-0">Marketing</h5>
                                  </div>
                                </div>
                              </li>
                              </Link>
                              <Link className='decoration' to="/dashboard/finance">
                              <li className="list-group-item">
                                <div className="media">
                                  <div className="media-body">
                                    <h5 className="mt-0">Finance</h5>
                                  </div>
                                </div>
                              </li>
                              </Link>
                         <Link className='decoration' to="/dashboard/accounting">
                              <li className="list-group-item">
                                <div className="media">
                                  <div className="media-body">
                                    <h5 className="mt-0">Accounting</h5>
                                  </div>
                                </div>
                              </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="col ">
                  <h3 className="text-center"></h3>
                  <div>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="card mb-5">
                            <div className="card-header bg-info-subtle">
                              <h5 className="card-title">All Manager's</h5>
                            </div>
                            <div className="card-body text-center">
                              <ul className="list-group">
                              <Link className='decoration' to="/dashboard/smita">
                                <li className="list-group-item pointer-events: none">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">Smita Subudhi</h5>
                                    </div>
                                  </div>
                                </li>
                                </Link>
                                <Link className='decoration' to="/dashboard/devanshu">
                                <li className="list-group-item">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">Devanshu Pawar</h5>
                                    </div>
                                  </div>
                                </li>
                                </Link>
                                <Link className='decoration' to="/dashboard/akash">
                                <li className="list-group-item">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">Akash Maurya</h5>
                                    </div>
                                  </div>
                                </li>
                                </Link>
                                <Link className='decoration' to="/dashboard/kishore">
                                <li className="list-group-item">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">Kishore Sunchu</h5>
                                    </div>
                                  </div>
                                </li>
                                </Link>
                                <Link className='decoration' to="/dashboard/ayush">
                                <li className="list-group-item">
                                  <div className="media">
                                    <div className="media-body">
                                      <h5 className="mt-0">Ayush Verma</h5>
                                    </div>
                                  </div>
                                </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container main1 mt-5 pt-5">
          <h1 className="text-center mb-4">Team Members</h1>
          <div className=" row ">
            <div className="col  m-5 ">
              <div className="card ">
                <div className='p-3 me-4'>
                <img src={adi} className="card-img-top" alt="Skyscrapers" />

                </div>
                <div className="card-body">
                  <h3 className="card-title">Aaditya Pathak</h3>
                  <p className="card-text">Web Developer</p>
                  <a className="card-text" href='#'>adiityarpathak7@gmail.com</a>
                </div>
                <div className="card-footer text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://github.com/adirpathak7" target="blank"><BsGithub/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/aaditya-pathak-5708a628b" target="blank"><BsLinkedin/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/mr.adiiii7" target="blank"><BsInstagram/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/Adiiiirp7" target="blank"><BsTwitter/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col  m-5 ">
              <div className="card ">
                <div className='p-3 me-4'>
                <img src={smita} className="card-img-top" alt="Skyscrapers" />

                </div>
                <div className="card-body">
                  <h3 className="card-title">Smita Subudhi</h3>
                  <p className="card-text">Web Developer</p>
                  <a className="card-text" href='#'>smitasubudhi24@gmail.com</a>
                </div>
                <div className="card-footer text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://github.com/maleswar" target="blank"><BsGithub/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/smita-subudhi-34b870249" target="blank"><BsLinkedin/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/maleswarsubudhi9" target="blank"><BsInstagram/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/subudhi_sm98167" target="blank"><BsTwitter/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col m-5 ">
              <div className="card ">
                <div className='p-3 me-4'>
                  <img src={deva} className="card-img-top" alt="Skyscrapers" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Devanshu Pawar</h3>
                  <p className="card-text">Web Developer</p>
                  <a className="card-text" href='#'>bhawsardeva08@gmail.com</a>
                </div>
                <div className="card-footer text-center">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="https://github.com/DP2614" target="blank"><BsGithub/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/devanshu-pawar-453106231" target="blank"><BsLinkedin/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://instagram.com/devanshu_2614/" target="blank"><BsInstagram/></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://x.com/DPAWAR2614/" target="blank"><BsTwitter/></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Admindashboard