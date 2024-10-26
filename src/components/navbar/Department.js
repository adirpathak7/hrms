import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Department = () => {
    const [Form, setForm] = useState({
        dname: "",
        mname: "",
        access: "default",
    });
    const [dept, setDept] = useState([]);
    const managerOptions = ["Smita", "Devanshu", "Akash", "Kishore", "Ayush"];

    useEffect(() => {
        getAllDept();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "access") {
            setForm({
                ...Form,
                [name]: value,
                mname: value === "Add" ? "" : "-",
            });
        } else {
            setForm({
                ...Form,
                [name]: value,
            });
        }
    };

    // const handleDeleteAllDepartments = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5000/deleteAll", {
    //             method: 'POST',
    //         });

    //         const data = await response.json();

    //         if (data.status === true) {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Success',
    //                 text: 'All departments deleted successfully.',
    //             });

    //             // Refresh the department list after successful deletion
    //             getAllDept();
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Error',
    //                 text: 'Failed to delete all departments.',
    //             });
    //         }
    //     } catch (error) {
    //         console.error('Error deleting all departments:', error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'An error occurred while deleting all departments.',
    //         });
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!Form.dname) {
            Swal.fire({
                icon: "error",
                title: "Fields can't be empty!",
                text: "Department name is required!",
            });
            return;
        }

        if (Form.access === "Add" && !Form.mname) {
            Swal.fire({
                icon: "warning",
                title: "Manager name can't be empty!",
                text: "Please enter the Manager Name!",
            });
            return;
        }

        if (Form.access === "default") {
            Swal.fire({
                icon: "error",
                title: "Select manager existed or not",
                text: "Please select an option",
            });
            return;
        }

        const response = await fetch("http://localhost:5000/dmname", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Form),
            method: "POST",
        });

        const data = await response.json();

        if (data.status === true) {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "New Department added successfully.",
            });

            setForm({
                dname: "",
                mname: "",
                access: "default",
            });

            getAllDept();
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong!",
            });
        }
    };

    const getAllDept = () => {
        fetch('http://localhost:5000/getDept')
            .then(response => response.json())
            .then(data => setDept(data))
            .catch(err => console.log("Error fetching Depts:", err));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="text-center mb-4">Add Department</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Department Name :</label>
                            <input
                                type="text"
                                id="department"
                                name="dname"
                                className="form-control"
                                onChange={handleChange}
                                value={Form.dname}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="access" className="form-label">Access Handler :</label>
                            <select
                                id="access"
                                name="access"
                                className="form-select"
                                onChange={handleChange}
                                value={Form.access}
                            >
                                <option value="default">Select One</option>
                                <option value="Add">Add Manager</option>
                                <option value="None">None</option>
                            </select>
                        </div>

                        {Form.access === "Add" && (
                            <select
                            id="manager"
                            name="mname"
                            onChange={handleChange}
                            value={Form.mname}
                            className="form-select"
                          >
                            <option value="" disabled>Select a Manager</option>
                            {managerOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        <div className='text-center mt-3'>
                            <button className="btn btn-info">Add Department</button>
                        </div>
                    </form>
                    <div className="table-responsive mt-5">
                        <h3 className="text-center mb-4">Department List</h3>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Department Name</th>
                                    <th>Manager Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dept.map(dept => (
                                    <tr key={dept._id}>
                                        <td>{dept.dname}</td>
                                        <td>{dept.mname}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="text-center mt-3">
                        <button className="btn btn-danger" onClick={handleDeleteAllDepartments}>
                            Delete All Departments
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Department;
