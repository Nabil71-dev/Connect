import useProfile from '../../../../custom_hooks/user_data/useProfile';
import { NavLink } from 'react-router-dom';
import profile_pic from '../../../../styles/assets/Profile_pic.png';
import style from "../../../../styles/topnav.module.css";

function Profile() {
    
    const currentuser = sessionStorage.getItem('currentuser')
    const { state } = useProfile(`http://localhost:8080/user/userprofile/${currentuser}`);
    const {data } = state;
    
    return (
        <div className="alignCenter">
            {
                data.result ? <h5 className="me-2">{data.result[0].username}</h5> : <h5 className="me-2">Unknown</h5>
            }
            <NavLink to={`/profile/${currentuser}`}><img className={`${style.profileImg}`} src={profile_pic} alt="dummy profile pic" /> </NavLink>
        </div>
    );
}
export default Profile;