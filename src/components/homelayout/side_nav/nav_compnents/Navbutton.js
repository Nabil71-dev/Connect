import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook, faUnlock, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import style from '../../../../styles/navbar.module.css';

const Navbutton = () => {
    return (
        <div className={`${style.align}`}>
            <ul className={`${style.navBtn}`}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="" >
                        <FontAwesomeIcon icon={faHouse} className={style.icon} />Home</NavLink>
                </li>
                <li><Dropdown /></li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="">
                        <FontAwesomeIcon icon={faMailBulk} className={style.icon} />Job Post</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="">
                    <FontAwesomeIcon icon={faAddressBook} className={style.icon} />Footprints</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="">
                    <FontAwesomeIcon icon={faUnlock} className={style.icon} />Open</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="">
                    <FontAwesomeIcon icon={faFacebookMessenger} className={style.icon} />Messenger</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbutton;