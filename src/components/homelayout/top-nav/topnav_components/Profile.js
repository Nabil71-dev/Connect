import {NavLink} from 'react-router-dom';
import profile_pic from '../../../../styles/assets/Profile_pic.png';
import style from "../../../../styles/topnav.module.css";
import useProfile from '../../../../custom_hooks/profile_load/useProfile';

function Profile() {
    
    const currentuser=sessionStorage.getItem('currentuser')
    const { state } = useProfile(currentuser);
    const { userprofile} = state;
    return ( 
        <div className="alignCenter">
            {
                userprofile.result ? <h5 className="me-2">{userprofile.result[0].username}</h5>:<h5 className="me-2">Unknown</h5>
            }
            <NavLink to={`/profile/${currentuser}`}><img className={`${style.profileImg}`}  src={profile_pic} alt="dummy profile pic"/> </NavLink>
        </div>
     );
}
export default Profile;