import "./Login.css";
import loginimg from '../images/bgimage.jpg';
import Swal from 'sweetalert2';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const Login = ({ session, setSession }) => {
  const navigate = useNavigate();
  const [Form, setForm] = useState({ username: '', password: '' });


  const handleChange = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
    console.log(Form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Form.username || !Form.password) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all fields',
      });
      return;
    }

    const response = await fetch("http://localhost:5000/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
      method: "POST",
    });

    const data = await response.json();

    if (data.status === true) {
      Swal.fire({
        icon: 'success',
        title: `Welcome back ${Form.username}`,
        text: 'Now do your work.'
      }).then(() => {
        setSession(1);
        navigate("/Dashboard");
      });

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Username or Password',
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <>
      <main className='vh-100  d-flex justify-content-center align-items-center overflow-hidden login'>
        <div className="container" id='fdiv'>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block mt-5 p-5">
                    <img src={loginimg} alt="login form" className="img-fluid ms-2 pt-5" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center" id="main">
                    <div className="card-body  p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center justify-content-center mb-1 pb-1">
                          <span className="h1 fw-bold mb-5">Login Page</span>
                        </div>
                        <div className="form-outline mb-5 ">
                          <label className="form-label fs-5 fw-bolder " htmlFor="username">Username : </label>
                          <input type="text" id="username" name='username' autoComplete='off' className="form-control form-control-lg" placeholder="Enter Username"
                            onChange={handleChange} />
                        </div>
                        <div className="form-outline mb-5 ">
                          <label className="form-label fs-5 fw-bolder" htmlFor="password">Password : </label>
                          <input type="password" id="password" name='password' autoComplete='off' className="form-control form-control-lg" placeholder="Enter Password"
                            onChange={handleChange} />
                        </div>
                        <div className=" mb-4 mt-5 pt-4 d-flex justify-content-around">
                          <button className="btn w-100   text-white fs-5 fw-bolder btn-lg btn-block" type="submit" id="btn1">Login</button> &nbsp;&nbsp;&nbsp;&nbsp;
                          <button className="btn w-100   text-white fs-5 fw-bolder btn-lg btn-block" type="reset" id="btn2">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Login;