import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import hrmslogo from '../images/logo.png';
import profileimg from '../images/person-circle.svg';
import logoutimg from '../images/box-arrow-right.svg';
import Swal from 'sweetalert2';

export const Dashboard = ({ session, setSession }) => {
  const navigate = useNavigate();



  const [setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {

    Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/")
        setSession(0);
      }
    });

  };
  return (
    <>

      <header className="navbar d-flex sticky-top justify-content-between   navbar-expand-lg" id="nav1" style={{ backgroundColor: '#17bebb' }}>
        <div className>
          <img src={hrmslogo} alt="Logo" width={35} className="ps-2 d-inline-block align-text-top img-fluid" />
          <Link className="navbar-brand  fs-6 fw-bold text-white  ps-2">
            HRMS
          </Link>
        </div>
        <div className="me-2 ps-3  rounded-4 d-flex justify-content-around bg-white d-inline-flex" id="icondiv">
          <Link className="pe-3 pb-1" width="15vb" to="/dashboard/profile"> <img src={profileimg} alt="does not support" /></Link>
          <Link className="pe-3" width="15vb" onClick={handleLogout}> <img src={logoutimg} alt="does not suport" /> </Link>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg sticky-top fw-bolder " style={{ backgroundColor: '#17bebb' }} id="nav2">
        <div className="container-fluid ps-5 pe-5">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav  flex-fill d-flex justify-content-center">
              <li className="nav-item  main ">
                <Link className="nav-link litext text-dark" aria-current="page" to="/dashboard/">Admin Dashboard</Link>
              </li>
              <li className="nav-item  main ">
                <Link className="nav-link litext text-dark" aria-current="page" to="/dashboard/empinfo">Employee's Information</Link>
              </li>
              <li className="nav-item main dropdown ">
                <Link className="nav-link dropdown-toggle litext text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Employee Management
                </Link>
                <ul className="dropdown-menu ">
                  <li><Link className="dropdown-item text-dark  " to="/dashboard/addemp">Add Employee</Link></li>
                  <li><Link className="dropdown-item text-dark  " to="/dashboard/updateemp">Update Employee</Link></li>
                  <li><Link className="dropdown-item text-dark  " to="/dashboard/deleteemp">Delete Employee</Link></li>
                </ul>
              </li>
              <li className="nav-item  main ">
                <Link className="nav-link litext text-dark" aria-current="page" to="/dashboard/department">Department's</Link>
              </li>
              <li className="nav-item  main ">
                <Link className="nav-link litext text-dark" aria-current="page" to="/dashboard/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <span className='fixed-bottom'>
        <a href='#'>
          <svg xmlns="http://www.w3.org/2000/svg" id='arrowsvg' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" 
          style={{ position: "fixed", bottom: "10px", right: "10px" }} >
            <path stroke-linecap="round"
              stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </a>
      </span>
      <div>
        <Outlet>
        </Outlet>
      </div>
    </>
  );
}
