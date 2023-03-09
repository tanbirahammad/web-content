import React from 'react';
import login from './login.css';

const Login = () => {
    return (
        <section id='login' className="container-fluid">
            <div className="row">
            <div className="login-box shadow">
                    <h4>Welcome</h4>
                    <p>Please login as an <strong>Admin</strong></p>
                    <form>
                        <div class="mb-3">
                            <label name="email" className="form-label">Email address</label>
                            <input type="email" className="form-control shadow-sm" required name="email" />
                        </div>
                        <div className="mb-3">
                            <label name="password" className="form-label">Password</label>
                            <input type="password" className="form-control shadow-sm" required name="password" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-sm">Submit</button>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Login;