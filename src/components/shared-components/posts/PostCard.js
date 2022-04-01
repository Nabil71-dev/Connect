import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommenting } from '@fortawesome/free-regular-svg-icons';
import profile_pic from '../../../styles/assets/Profile_pic.png';
import style from '../../../styles/post-card.module.css';
import Article from '../post-show-hide/PostDescription';
import Comments from '../comment/Comments';
import Threedot from './card-comp/ThreeDotNav';

const demoText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

function PostCard({ props }) {

    const [comment, toggleComment] = useState(false)
    const handleComment = () => {
        toggleComment(!comment);
    }

    return (
        <>
            <div className="cardContainer contentBg container">
                <div className="d-flex justify-content-between mt-3 mb-2">
                    <div  className="d-flex">
                        <Link to="/profile"><img src={profile_pic} alt="Profile_Picture" className="post-userpic me-2" /></Link>
                        <div>
                            <h4 className={`${style.profile_name} my-auto`}>Nabil71-dev</h4>
                            <small>Feb 24, 2022</small>
                        </div>
                    </div>
                    <div>
                        <Threedot />
                    </div>
                </div>
                <div className="d-flex">
                    <h5 className="mt-2 me-4">#{props.type}</h5>
                    {
                        props.type === 'Job-Post' &&
                        <h5 className="mt-2">#No. of vacancy : {props.vacancy}</h5>
                    }
                </div>
                <div>
                    <h3 className="mt-2 mb-3">Topic header {props.header}</h3>
                    <Article text={demoText} />
                    {
                        props.img && <img src="https://media.istockphoto.com/vectors/we-are-hiring-choosing-the-talented-person-for-hiring-vector-vector-id1210769978?s=612x612" alt="Post_image-if-uploaded" className={`${style.postImage}`} />
                    }
                </div>
                <div className="mt-3 mb-3">
                    <label className="mt-2 me-4"><FontAwesomeIcon icon={faHeart} /> 300 </label>
                    <label><FontAwesomeIcon icon={faCommenting} /><button onClick={handleComment} className={`${style.addComment}`}>  Add comment</button></label>
                </div>
                <div>
                    <Comments comment={comment} />
                </div>
            </div>
        </>
    );
}

export default PostCard;