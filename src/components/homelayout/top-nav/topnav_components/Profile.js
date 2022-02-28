import {Link} from 'react-router-dom';
import profile_pic from '../../../../styles/assets/Profile_pic.png';
import style from "../../../../styles/topnav.module.css";

function Profile() {
    return ( 
        <div  className={`${style.profileContainer} alignCenter`}>
            <h5 className="me-2">Nabil71-dev </h5>
            <Link to="/profile"> <img src={profile_pic} alt="dummy profile pic"/> </Link>
        </div>
     );
}
export default Profile;