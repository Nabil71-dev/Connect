import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/navbar.module.css';
import { useAuth } from '../../../../context/AuthContext';

const Logout = () => {
    const { logOut } = useAuth()

    return (
        <>
            <button onClick={logOut} className={`${style.logoutButton}`}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
        </>
    );
};

export default Logout;