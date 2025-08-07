import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faunlock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './loginSignup.css';

const LoginSignup = () => {

    return (
        <div id="container">
            <div className="header">SignUp</div>

            <div className="form">
                <div className="input-name">
                    <i className="fa-solid fa-keyboard"></i>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="input-email">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-password">
                    <i className="fa-solid fa-unlock"></i>
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            <div className="footer"></div>
        </div>
    );
}

export default LoginSignup;