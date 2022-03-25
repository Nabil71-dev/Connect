// component is about the students info who are currently Looking
// for job on different different company;

import profile_pic from '../../../../../styles/assets/Profile_pic.png'
import { Link } from 'react-router-dom';

function JobFootprint({ props }) {
    return (
        <>
            <div className="cardContainer contentBg container">
                <div className="d-flex mt-3 mb-2">
                    <Link to="/profile"><img src={profile_pic} alt="" className="post-userpic me-2"/> </Link>
                    <div>
                        <h4 className="h-25">Nabil71-dev</h4>
                        <small>Position</small>
                    </div>
                </div>
                <p>{props}</p>
            </div>
        </>
    );
}

export default JobFootprint;