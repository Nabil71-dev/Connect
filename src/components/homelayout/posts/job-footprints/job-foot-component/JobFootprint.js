// component is about the students info who are currently Looking
// for job on different different company;
import style from '../../../../../styles/footprint_lookingjob_card.module.css';
import profile_pic from '../../../../../styles/assets/Profile_pic.png'

function JobFootprint({props}) {
    return (
        <>
            <div className={`${style.cardContainer} contentBg container`}>
                <div className="d-flex">
                    <img src={profile_pic} alt="" />
                    <div>
                        <h4>Nabil71-dev</h4>
                        <small>Position</small>
                    </div>
                </div>
                <p>{props}</p>
            </div>
        </>
    );
}

export default JobFootprint;