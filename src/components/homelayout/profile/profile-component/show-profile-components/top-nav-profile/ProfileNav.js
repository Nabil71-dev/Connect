import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../../../../styles/assets/Logo.svg';
import style from '../../../../../../styles/navbar.module.css'


function ProfileNav() {
    return (
        <>
            <img src={logo} alt="Im-Logo" />

            <div className="col-9 text-end">
                <NavLink to="/home" className={`${style.Navbtn} me-4`}>
                    <FontAwesomeIcon icon={faHouse} className="me-2" />Home
                </NavLink>
                <NavLink to="/editProfile" className={`${style.Navbtn}`}>
                    <FontAwesomeIcon icon={faUserEdit} className="me-2" />Edit Profile
                </NavLink>
            </div>
        </>
    );
}

export default ProfileNav;