import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "./Addemp.css"

const Addemp = () => {

  const [Form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    address: "",
    hireDate: "",
    salary: "",
    deptName: "",
    manager:"",
  });

  const departmentOptions = ["IT", "HR", "Marketing", "Finance", "Accounting"]; 
  const managerOptions = ["Smita", "Devanshu", "Akash", "Kishore", "Ayush"];   
  
  const firstNameRef = useRef(null);

  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    })
    console.log(Form);
  }

  const handleReset = () => {
    setForm({
      fname: "",
      lname: "",
      email: "",
      contact: "",
      gender: "",
      address: "",
      hireDate: "",
      salary: "",
      deptName: "",
      manager: "",
    });
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const contactPattern = /^\d{10}$/;

    if (!Form.fname || !Form.lname || !Form.email || !Form.contact || !Form.address || !Form.hireDate || !Form.salary || !Form.deptName || !Form.manager) {
      Swal.fire({
        icon: "error",
        title: "Field's can't be empty!",
        text: "All fields are required!",
      });
      return;
    }

    if (!emailPattern.test(Form.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email Format",
        text: "Please enter a valid email address.",
      });
      return;
    }
  
    if (!contactPattern.test(Form.contact)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Contact Number",
        text: "Please enter a 10-digit contact number.",
      });
      return;
    }

    const response = await fetch("http://localhost:5000/test", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();
    console.log(data);
    if (data.status === true) {
      Swal.fire({
        icon: "success",
        title: `${Form.fname} added successfully`,
        text: `${Form.fname} added by Adi.`,
      });
      
      handleReset();

      setForm({
        fname: "",
        lname: "",
        email: "",
        contact: "",
        gender: "",
        address: "",
        hireDate: "",
        salary: "",
        deptName: "",
        manager:"",
      });
      
    }else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong!",
        });
      } 
  }
  return (
    <div className="vh-180" id="addempdiv">
     <section className>
    <div className="row  d-flex justify-content-left align-items-center overflow-auto">
      <div className="col-9 ps-1" id="h-custom2"> 
        <div className="d-flex justify-content-center align-items-center">
          <form className="w-75 ps-5 mt-1 pe-5" onSubmit={handleSubmit}>
            <div>
              <h1 className="text-center pb-2 pt-4 ">Add Employee</h1>
            </div>
            <h5 className="fw-bolder fs-5 text-primary">Persional Details</h5>
            <hr />
            <div className="row">
              <div className="col-md-6 mb-lg-2">
                <div className="form-outline">
                  <label className="form-label fw-bolder" htmlFor="fname">First Name</label>
                  <input type="text" id="fname" name="fname" onChange={handleChange} value={Form.fname} className="form-control w-100  form-control-lg" placeholder="Enter the first name" />
                </div>
              </div>
              <div className="col-md-6 mb-lg-2 ">
                <div className="form-outline">
                  <label className="form-label fw-bolder" htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" name="lname" onChange={handleChange} value={Form.lname} className="form-control form-control-lg" placeholder="Enter the last name" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-lg-2 ">
                <div className="form-outline">
                  <label className="form-label fw-bolder" htmlFor="email">Email</label>
                  <input type="text" id="email" name="email" onChange={handleChange} value={Form.email} className="form-control form-control-lg" placeholder="abc123@gmail.com" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-lg-2 ">
                <div className="form-outline">
                  <label className="form-label fw-bolder" htmlFor="contact">Contact Number</label>
                  <input type="number" id="contact" name="contact" onChange={handleChange} value={Form.contact} className="form-control form-control-lg" placeholder="+91 12345 67891" />
                </div>
              </div>
              <div className="col-md-6 mb-lg-2">
                <h6 className="pb-1">Gender:</h6>
                <div className="form-check form-check-inline">
                  <label className="form-check-label" htmlFor="male">Male</label>
                  <input className="form-check-input" type="radio" name="gender" onChange={handleChange} id="male" defaultValue="Male" />
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" onChange={handleChange} id="female" defaultValue="Female" />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-lg-2 ">
                <div className="form-outline">
                  <label className="form-label fw-bolder" htmlFor="address">Address</label>
                  <textarea type="text" id="address" name="address" onChange={handleChange} value={Form.address} className="form-control form-control-lg" placeholder="Enter the address " defaultValue={""} />
                </div>
              </div>
            </div>
            <h5 className="fw-bolder fs-5 text-primary">Departments Details</h5>
            <hr />
            <div className="row">
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <div className="form-outline  w-100">
                  <label htmlFor="hireDate" className="form-label fw-bolder">Hire Date</label>
                  <input type="date" className="form-control form-control-lg" id="hireDate" name="hireDate" min="2023-06-01" max="2023-08-31" onChange={handleChange} value={Form.hireDate} />
                </div>
              </div>
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <div className="form-outline  w-100">
                  <label htmlFor="salary " className="form-label fw-bolder">Salary</label>
                  <input type="number" className="form-control form-control-lg" id="salary" name="salary" onChange={handleChange} value={Form.salary} placeholder="0000.00 RS." />
                </div>
              </div>
            </div>

            <div className="row">
                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline w-100">
                      <label htmlFor="deptName" className="form-label fw-bolder">Department Name</label>
                      <select
                        id="deptName"
                        name="deptName"
                        onChange={handleChange}
                        value={Form.deptName}
                        className="form-select form-select-lg"
                      >
                        <option value="" disabled>Select a Department</option>
                        {departmentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4 d-flex align-items-center">
                    <div className="form-outline w-100">
                      <label htmlFor="manager" className="form-label fw-bolder">Manager Name</label>
                      <select
                        id="manager"
                        name="manager"
                        onChange={handleChange}
                        value={Form.manager}
                        className="form-select form-select-lg"
                      >
                        <option value="" disabled>Select a Manager</option>
                        {managerOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
            <div className="ps-5  d-flex justify-content-center ">
              <input id="addbtn" className="btn btn-outline-danger me-5 w-100 btn-lg" type="submit" defaultValue="Submit" />
              <input id="addbtn" className="btn btn-outline-danger me-5 w-100 btn-lg" type="reset" onClick={handleReset} defaultValue="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default Addemp