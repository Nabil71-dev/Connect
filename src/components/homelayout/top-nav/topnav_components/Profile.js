import profile_pic from '../../../../styles/assets/Profile_pic.png';
import style from "../../../../styles/topnav.module.css";

function Profile() {
    return ( 
        <div  className={`${style.profileContainer} alignCenter`}>
            <p>Dummy name</p>
            <img src={profile_pic} alt="dummy profile pic"/>
        </div>
     );
}
export default Profile;