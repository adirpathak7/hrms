import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Updateemp = () => {
    const [user, setUser] = useState([]);
    const [hireDate, setHireDate] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const departmentOptions = ["IT", "HR", "Marketing", "Finance", "Sales", "Accounting"]; // Options for Department Name dropdown
    const managerOptions = ["Smita", "Devanshu", "Akash", "Kishore", "Ayush", "Ranu"]; // Options for Manager Name dropdown
    
    useEffect(() => {
        getAllUser();
    }, []);

    useEffect(() => {
        // Check if selectedEmployee is not null and has a hireDate property
        if (selectedEmployee && selectedEmployee.hireDate) {
            setHireDate(selectedEmployee.hireDate);
        } else {
            setHireDate(""); // If no hire date is available, reset to an empty string
        }
    }, [selectedEmployee]);

    const getAllUser = () => {
        axios.get('http://localhost:5000/getUser')
            .then(response => setUser(response.data))
            .catch(err => console.log("Error fetching users:", err))
    }

    const handleEditClick = (employee) => {
        setSelectedEmployee(employee);
        setHireDate(employee.hireDate || '');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedEmployee(null);
        setShowModal(false);
    };

    const handleChange = (e) => {
        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name]: e.target.value
    });
}


const handleUpdate = () => {
    if (selectedEmployee) {
        const updatedData = {
            hireDate: hireDate,
            salary: document.getElementById('salary').value,
            deptName: document.getElementById('deptName').value,
            manager: document.getElementById('manager').value,
            contact: document.getElementById('contact').value
        };

        axios.post(`http://localhost:5000/update`, {
            hireDate: updatedData.hireDate,
            salary: updatedData.salary,
            deptName: updatedData.deptName,
            manager: updatedData.manager,
            contact: updatedData.contact
        })
            .then(response => {
                console.log("Employee updated successfully:", response.data);
                Swal.fire({
                    icon: "success",
                    title: "Employee updated successfully!",
                    text: "Employee detail's updated by Admin.",
                  });
                handleCloseModal();
                getAllUser();
            })
            .catch(error => {
                console.error("Error updating employee:", error);
            });
    }
};
return (
    <div className="container">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 text-center mb-2">
                    <h2><b>Update Employee's</b></h2>
                </div>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Hire Date</th>
                                <th>Salary</th>
                                <th>Department</th>
                                <th>Manager</th>
                                <th>Update Employee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map(usr => (
                                    <tr key={usr.contact}>
                                        <td>{usr.fname}</td>
                                        <td>{usr.lname}</td>
                                        <td>{usr.email}</td>
                                        <td>{usr.gender}</td>
                                        <td>{usr.contact}</td>
                                        <td>{usr.address}</td>
                                        <td>{usr.hireDate.substring(0,10)}</td>
                                        <td>{usr.salary}</td>
                                        <td>{usr.deptName}</td>
                                        <td>{usr.manager}</td>
                                        <td className="text-center">
                                            <Link className="fa-solid fa-user-pen" onClick={() => handleEditClick(usr)}></Link>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header ">
                        <h3 className="modal-title">Edit Employee Details</h3>
                        <Link type="Link" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                            <span aria-hidden="true">&times;</span>
                        </Link>
                    </div>
                    <div className="modal-body">
                        <form>
                            <h5 className="text-center">Persional Details</h5>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" className="form-control" id="fname" name="fname" value={selectedEmployee?.fname || ''} disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" className="form-control" id="lname" name="lname" value={selectedEmployee?.lname || ''} disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={selectedEmployee?.email || ''} disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <input type="number" className="form-control" id="contact" name="contact" value={selectedEmployee?.contact || ''} disabled />
                            </div>
                            <div class="form-group">
                                <label htmlFor="contact">Gender</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                    <input className="form-check-input" type="radio" name="male" id="male" value="male" disabled />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="female" id="female" value="female" disabled />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob">DOB</label>
                                <input type="date" className="form-control" id="dob" name="dob" value={selectedEmployee?.dob || ''} disabled />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="textarea" className="form-control" id="address" name="address" value={selectedEmployee?.address || ''} disabled />
                            </div>
                            <h5 className="text-center">Department's Details</h5>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="hireDate">Hire Date</label>
                                <input type="date" className="form-control" id="hireDate" name="hireDate" min="2023-06-01" max="2023-08-31" value={hireDate} onChange={(e) => setHireDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input type="number" className="form-control" id="salary" name="salary" onChange={handleChange} value={selectedEmployee?.salary || ''} />
                            </div>
                            <div className="form-group">
                    <label htmlFor="deptName">Department</label>
                    <select
                        id="deptName"
                        name="deptName"
                        onChange={handleChange}
                        value={selectedEmployee?.deptName || ''}
                        className="form-select"
                    >
                        <option value="" disabled>Select a Department</option>
                        {departmentOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="manager">Manager</label>
                    <select
                        id="manager"
                        name="manager"
                        onChange={handleChange}
                        value={selectedEmployee?.manager || ''}
                        className="form-select"
                    >
                        <option value="" disabled>Select a Manager</option>
                        {managerOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Link type="Link" className="btn btn-success" onClick={handleUpdate}>Save changes</Link>
                        <Link type="Link" className="btn btn-warning" data-dismiss="modal" onClick={handleCloseModal}>Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
}

export default Updateemp