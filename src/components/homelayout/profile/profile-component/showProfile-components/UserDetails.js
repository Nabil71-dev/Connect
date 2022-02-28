import style from '../../../../../styles/userdetails.module.css';
import logo from '../../../../../styles/assets/Picture.svg';

function UserDetails() {
    return (
        <div className="text-center">
            <div className={`${style.userInfo} contentBg`}>
                <h5>Nabil71-dev</h5>
                <p>Designation</p>
            </div>
            <div className={`${style.userCard}`}>
                <img src={logo} alt="ProfilePic" className={`${style.profilePic}`} />
                <article className={`${style.details}`} >JavaScript Dev. can work with reacJS and nodeJS 
                Also have problem solving skillset JavaScript Dev. can work with reacJS and nodeJS 
                Also have problem solving skillset</article>
            </div>
        </div>
    );
}

export default UserDetails;