import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import LoginForm from './log-reg_components/LoginForm';
import SideCard from './log-reg_components/Side-Card';
import logo from '../../styles/assets/Logo.svg';
import style from '../../styles/login_register.module.css'

import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const { login_w_google } = useAuth()
    return (
        <div className={`${style.cardBg} container contentBg`}>
            <div className="row">
                <div className="mx-auto col-7 mt-5">
                    <img src={logo} alt="logo" />
                    <div className={`${style.formCard} text-center`}>
                        <div className="alignCenter mb-2">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className={`${style.iconSize} me-3`} />
                            <h1 className="f-header">Sign in</h1>
                        </div>
                        <LoginForm />
                        {/* <p className="mt-2">OR</p> */}
                        <button onClick={login_w_google} className="button-main mt-3"><FontAwesomeIcon icon={faGoogle} /> Sign in</button>
                    </div>
                </div>
                <div className={`${style.sidecard} text-center mx-auto alignCenter col-4`}>
                    <div>
                        <SideCard login={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;