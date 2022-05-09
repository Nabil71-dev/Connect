//Comment part will be used after completing server

import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/navbar.module.css';
import { useAuth } from '../../../../context/AuthContext';

const Logout = () => {
    const { logOut } = useAuth()

    //dummy
    // const Navigate = useNavigate();
    // const logOut = () => {
    //     Navigate("/", {
    //         replace: true
    //     })
    // }

    return (
        <>
            <button onClick={logOut} className={`${style.logoutButton}`}>
                <FontAwesomeIcon icon={faSignOut} /> Logout
            </button>
        </>
    );
};

export default Logout;