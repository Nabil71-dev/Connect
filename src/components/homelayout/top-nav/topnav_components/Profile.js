import {Link} from 'react-router-dom';
import profile_pic from '../../../../styles/assets/Profile_pic.png';
import style from "../../../../styles/topnav.module.css";

function Profile() {
    return ( 
        <div  className={`${style.profileContainer} alignCenter`}>
            <p>Dummy name</p>
            <Link to=""> <img src={profile_pic} alt="dummy profile pic"/> </Link>
        </div>
     );
}
export default Profile;