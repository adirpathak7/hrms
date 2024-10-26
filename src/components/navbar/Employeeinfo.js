import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { CSVLink } from 'react-csv';

const Employeeinfo = () => {
    const [user, setUser] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        getAllUser();
    }, []);

    // Fetch all Employees
    const getAllUser = () => {
        axios.get('http://localhost:5000/getUser')
            .then(response => {
                setUser(response.data);
                setSearchResults(response.data);
            })
            .catch(err => console.log("Error fetching users:", err))
    }

    const handleSearch = (e) => {
        const key = e.target.value;
        setSearchKey(key);

        const filteredUsers = user.filter(user =>
            user.fname.toLowerCase().includes(key.toLowerCase())
        );
        setSearchResults(filteredUsers);
    };

    const headers = [
        { label: "First Name", key: "fname" },
        { label: "Last Name", key: "lname" },
        { label: "Email", key: "email" },
        { label: "Gender", key: "gender" },
        { label: "Contact", key: "contact" },
        { label: "Address", key: "address" },
        { label: "Hire Date", key: "hireDate" },
        { label: "Salary", key: "salary" },
        { label: "Department", key: "deptName" },
        { label: "Manager", key: "manager" },
    ];

    return (
        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 text-center">
                        <h2><b>Employee's Information</b></h2>
                    </div>
                </div>


                <div>
                    <CSVLink
                        data={searchResults}
                        headers={headers}
                        filename={"HRMS_Employees_Data.csv"}
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Export Data
                    </CSVLink>
                </div>
                <div className="col-md-4 col-6 text-right mb-3" style={{ marginLeft: "75%" }}>
                    <div className="input-group input-group-sm w-75">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by First Name"
                            value={searchKey}
                            onChange={handleSearch}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                Search
                            </button>
                        </div>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchResults.length > 0 ? (
                                        searchResults.map(usr => (
                                            <tr key={usr.id}>
                                                <td>{usr.fname}</td>
                                                <td>{usr.lname}</td>
                                                <td>{usr.email}</td>
                                                <td>{usr.gender}</td>
                                                <td>{usr.contact}</td>
                                                <td>{usr.address}</td>
                                                <td>{usr.hireDate.substring(0, 10)}</td>
                                                <td>{usr.salary}</td>
                                                <td>{usr.deptName}</td>
                                                <td>{usr.manager}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10" className="text-center">Record not found!</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employeeinfo;
