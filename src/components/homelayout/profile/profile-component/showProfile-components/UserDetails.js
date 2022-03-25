import style from '../../../../../styles/userdetails.module.css';
import pic from '../../../../../styles/assets/Picture.svg';

function UserDetails() {
    return (
        <div className="text-center">
            <div className="d-flex contentBg">
                <h5 className="ms-4 me-4 mt-2">Nabil71-dev</h5>
                <p className="mt-2">Designation</p>
            </div>
            <div className={`${style.userCard}`}>
                <img src={pic} alt="ProfilePic" className={`${style.profilePic}`} />
                <article className={`${style.details}`} >JavaScript Dev. can work with reacJS and nodeJS 
                Also have problem solving skillset JavaScript Dev. can work with reacJS and nodeJS 
                Also have problem solving skillset</article>
            </div>
        </div>
    );
}

export default UserDetails;