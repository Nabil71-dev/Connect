import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';

import SideCard from './log-reg_components/Side-Card'
import RegisterForm from './log-reg_components/RegisterForm';
import logo from '../../styles/assets/Logo.svg';
import style from '../../styles/login_register.module.css';

const Registration = () => {
    return (
        <div className={`${style.cardBg} container contentBg`}>
            <div className="row">
                <div className="mx-auto col-7 mt-5">
                    <img src={logo} alt="logo" />
                    <div className={`${style.formCard} text-center`}>
                        <div className="alignCenter mb-3">
                            <FontAwesomeIcon icon={faUserPlus} className={`${style.iconSize} me-3`}/>
                            <h1 className="f-header">Sign Up</h1>
                        </div>
                        <RegisterForm />
                    </div>
                </div>
                <div className={`${style.sidecard} text-center mx-auto alignCenter col-4`}>
                    <div>
                       <SideCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;