import style from '../../../../../../styles/userdetails.module.css';
import pic from '../../../../../../styles/assets/Picture.svg';

function UserDetails({ props }) {
    const { username, working,personal_description } = props

    return (
        <div className="text-center">
            <div className="d-flex contentBg">
                <h5 className="ms-4 me-4 mt-2">{username}</h5>
                {
                    working?.job_post ? <p className="mt-2">{working?.job_post}</p> : <p className="mt-2">Not set yet</p>
                }
            </div>
            <div className={`${style.userCard}`}>
                <img src={pic} alt="ProfilePic" className={`${style.profilePic}`} />
                {
                    personal_description ? <article className={`${style.details}`} >{personal_description}</article> : 
                    <article className={`${style.details}`}>Please set personal descrption from edit profile</article>
                }
            </div>
        </div>
    );
}

export default UserDetails;