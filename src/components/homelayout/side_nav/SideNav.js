import logo from '../../../styles/assets/Logo.svg';
import Navbutton from './nav_compnents/Navbutton';
import style from '../../../styles/navbar.module.css';
import Logout from './nav_compnents/Logout';

const SideNav = () => {
    return (
        <div className={`${style.sideNavbg} contentBg text-center`}>
            <div>
                <img src={logo} alt="logo" className={`${style.navLogo}`} />
            </div>
            <div>
                <Navbutton />
            </div>
            <div>
                <Logout />
            </div>
        </div>
    );
};

export default SideNav;