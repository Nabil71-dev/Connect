import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';

import SideCard from './log-reg_components/Side-Card'
import RegisterForm from './log-reg_components/RegisterForm';
import logo from '../../styles/assets/Logo.svg';
import style from '../../styles/login_register.module.css';

const Registration = () => {
    return (
        <div className={`${style.cardBg} container contentBg`}>
            <div className="row">
                <div className={`${style.lMargin} col-7 mt-5`}>
                    <img src={logo} alt="logo" />
                    <div className={`${style.formCard}`}>
                        <div className="alignCenter mb-3">
                            <FontAwesomeIcon icon={faUserPlus} className={`${style.iconSize}`}/>
                            <h1 className={`${style.bannerHead}`}>Sign Up</h1>
                        </div>
                        <RegisterForm />
                        <p className="mt-2">Or sign up with <FontAwesomeIcon icon={faGoogle}/></p>
                    </div>

                </div>
                <div className={`${style.sidecard} col-4`}>
                    <SideCard />
                </div>
            </div>
        </div>
    );
};

export default Registration;