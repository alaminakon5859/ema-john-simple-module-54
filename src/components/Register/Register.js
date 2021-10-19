import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2>please register</h2>
                <form onSubmit="">
                    <input type="email" placeholder="email" />
                    <br />
                    <input type="password" placeholder="enter youre password" />
                    <br />
                    <input type="password" placeholder="re-enter youre password"  />
                    <br />

                    <input type="submit" value="submit" />
                </form>
                <p>you havean account ? <Link to="/login">login</Link> </p>
                <div>.............or..............</div>
                <button className="btn-regular">google sign in</button>
            </div>
        </div>
    );
};

export default Register;