import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook, faUnlock, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import style from '../../../../styles/navbar.module.css';
import Popup from './Popup';

const Navbutton = () => {
    return (
        <div className="text-start">
            <ul className={`${style.navBtn}`}>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="/home/allposts" >
                        <FontAwesomeIcon icon={faHouse} className="me-2" />Home</NavLink>
                </li>
                <li><Popup /></li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="/home/jobposts">
                        <FontAwesomeIcon icon={faMailBulk} className="me-2" />Job Post</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="/home/footprints">
                    <FontAwesomeIcon icon={faAddressBook} className="me-2" />Footprints</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="/home/lookingjob">
                    <FontAwesomeIcon icon={faUnlock} className="me-2" />Open</NavLink>
                </li>
                <li><NavLink className={({ isActive }) => (isActive ? "text-success" : '')} to="/messanger">
                    <FontAwesomeIcon icon={faFacebookMessenger} className="me-2" />Chat</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbutton;