import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

import LoginForm from './log-reg_components/LoginForm';
import SideCard from './log-reg_components/Side-Card';
import logo from '../../styles/assets/Logo.svg';
import style from '../../styles/login_register.module.css'

const Login = () => {
    return (
        <div className={`${style.cardBg} container contentBg`}>
            <div className="row">
                <div className={`${style.lMargin} col-7 mt-5`}>
                    <img src={logo} alt="logo" />
                    <div className={`${style.formCard}`}>
                        <div className="alignCenter mb-3">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className={`${style.iconSize}`} />
                            <h1 className={`${style.bannerHead}`}>Sign in</h1>
                        </div>
                        <LoginForm />
                    </div>
                </div>
                <div className={`${style.sidecard} col-4`}>
                    <SideCard login={true} />
                </div>
            </div>
        </div>
    );
};

export default Login;