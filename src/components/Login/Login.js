import React from 'react';
import { Link, useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const {signinusinggoogle}=useAuth();
    const location =useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/shop';



    const handlelogin=()=>{
        signinusinggoogle()
        .then((result) => {
            history.push(redirect_uri);
            

        })
    }
    return (
        <div className="login-form">
            <div>
                <h2>please login </h2>
                <form onSubmit="">
                    <input type="email" />
                    <br />
                    <input type="password" />
                    <br />
                     <input type="submit" value="submit" />
                </form>
                <p>new to ema-jhon <Link to="/register"> create  account </Link> </p>
                <div>...   or.........</div>
                <button className="btn-regular" onClick={handlelogin}>google sign in</button>
            </div>
        </div>
    );
};

export default Login;