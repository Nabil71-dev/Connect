import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import style from '../../../../styles/navbar.module.css';

const Logout = () => {
    const navigate = useNavigate();
    //Format all url and go to new one
    const goBack = () => {
        navigate("/", {
            replace: true
        });
    }

    return (
        <>
            {/* Just for dummy purpose go back feature*/}
            <button onClick={goBack} className={`${style.logoutButton}`}>
                <FontAwesomeIcon icon={faSignOut} /> Logout
            </button>
        </>
    );
};

export default Logout;