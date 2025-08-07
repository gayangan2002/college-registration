import React, {useState}  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faUnlock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './loginSignup.css';

const LoginSignup = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <div id="container">
            <div className="header">{showLogin ? "Login" : "SignUp"}</div>
            <div className="form-signup">
                {showLogin ? (
                    <>
                         <div className="input-name">
                            <FontAwesomeIcon icon={faKeyboard} />
                            <input type="name" placeholder="Name" />
                        </div>
                        <div className="input-password">
                            <FontAwesomeIcon icon={faUnlock} />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className="btn-login">Login</button>
                        <button className="btn-signup" onClick={() => setShowLogin(false)}>SignUp</button>
                    </>
                ) : (
                    <>
                        
                        <div className="input-name">
                            <FontAwesomeIcon icon={faKeyboard} />
                            <input type="name" placeholder="Name" />
                        </div>
                        <div className="input-email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" placeholder="Email" />
                        </div>
                        
                        <div className="input-password">
                            <FontAwesomeIcon icon={faUnlock} />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className="btn-signup">SignUp</button>
                        <button className="btn-login" onClick={() => setShowLogin(true)}>Login</button>
                    </>
                )}
            </div>
            <div className="footer"></div>
        </div>
    );
}

export default LoginSignup;