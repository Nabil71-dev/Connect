import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommenting} from '@fortawesome/free-regular-svg-icons';
import profile_pic from '../../../../../styles/assets/Profile_pic.png';
import style from '../../../../../styles/topics_vacancy.module.css';
import Article from './PostDescription';
import Comments from './Comments';
import { Link } from 'react-router-dom';

const demoText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

function TopicsVacancy({ props }) {

    const [comment,toggleComment]=useState(false)
    const handleComment = () => {
      toggleComment(true);
      console.log("comments loading")
    }
    return (
        <>
            <div className={`${style.postContainer} contentBg container`}>
                <div className="d-flex">
                    <Link to="/profile"><img src={profile_pic} alt="Profile_Picture" className={`${style.profilePic}`} /></Link>
                    <div>
                        <h4 className={`${style.username} ${style.profile_name}`}>Nabil71-dev</h4>
                        <small>Feb 24, 2022</small>
                    </div>
                </div>
                <div className="d-flex">
                    <h5 className={`${style.username} me-4`}>#{props.type}</h5>
                    {
                        props.type === 'Job-Post' &&
                        <h5 className={`${style.username}`}>#No. of vacancy : {props.vacancy}</h5>
                    }
                </div>
                <div>
                    <h3 className={`${style.username} mb-2`}>Topic header {props.header}</h3>
                    <Article text={demoText} />
                    {
                        props.img && <img src="https://media.istockphoto.com/vectors/we-are-hiring-choosing-the-talented-person-for-hiring-vector-vector-id1210769978?s=612x612" alt="Post_image-if-uploaded" className={`${style.postImage}`}/>
                    }
                </div>
                <div className="mt-3">
                    <label className={`${style.username} me-4`}><FontAwesomeIcon icon={faHeart} /> 300 </label>
                    <label><FontAwesomeIcon icon={faCommenting} /><span onClick={handleComment} className={`${style.username}`}>  Add comment</span></label>
                </div>
                <div>
                    <Comments comment={comment}/>
                </div>
            </div>
        </>
    );
}

export default TopicsVacancy;