import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from 'axios';

const Deleteemp = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getAllUser();
    }, []);
    const getAllUser = () => {
        axios.get('http://localhost:5000/getUser')
            .then(user => setUser(user.data))
            .catch(err => console.log("Delete has some problem", err))
    }


    const deleteEmp = (name) => {
        Swal.fire({
            title: `Are you sure you want to delete ${name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://localhost:5000/delete", {
                    method: "POST",
                    crossDomain: true,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: JSON.stringify({
                        fname: name,
                    }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire("Deleted!", data.data, "success");
                        getAllUser();
                    })
                    .catch((error) => {
                        console.error("Error deleting employee:", error);
                    });
            }
        });
    };

    return (
        <div className="container">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 text-center">
                        <h2><b>Delete Employee</b></h2>
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
                                    <th>Delete Employee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map(usr => {
                                        return <tr>
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
                                                <Link href="#" class="delete" id="delete" title="Delete" data-toggle="tooltip"
                                                    style={{ color: "red" }} onClick={() => deleteEmp(usr.fname)}>
                                                    <i class="material-icons">&#xE872;</i>
                                                </Link>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deleteemp