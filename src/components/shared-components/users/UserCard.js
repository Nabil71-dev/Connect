// component is about the students info who are currently Looking
// for job on different different company;

import profile_pic from '../../../styles/assets/Profile_pic.png'
import { Link } from 'react-router-dom';

function UserCard({ props }) {
    const {username,personal_description,working}=props
    return (
        <>
            <div className="cardContainer contentBg container">
                <div className="d-flex mt-3 mb-2">
                    <Link to="/profile"><img src={profile_pic} alt="" className="post-userpic me-2"/> </Link>
                    <div>
                        <h4 className="h-25">{username}</h4>
                        {
                            working?.job_post ? <small>{working?.job_post} <small className="ms-2">{working?.company_name}</small></small>:<small>Profile not updated yet</small>
                        }
                    </div>
                </div>
                {
                    personal_description ? <p>{personal_description}</p>:<p>Profile not updated yet</p>
                }
                
            </div>
        </>
    );
}

export default UserCard;