//import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommenting } from '@fortawesome/free-regular-svg-icons';
import profile_pic from '../../../styles/assets/Profile_pic.png';
import style from '../../../styles/post-card.module.css';
import Article from '../post-show-hide/PostDescription';
//import Comments from '../comment/Comments';
import Threedot from './card-comp/ThreeDotNav';

function PostCard({ props }) {

    const currentuser = sessionStorage.getItem('currentuser')
    // const [comment, toggleComment] = useState(false)
    // const handleComment = () => {
    //     toggleComment(!comment);
    // }
    const { id,usermail, username, date, post_topic, no_of_vacancy, post_header, post, image } = props

    return (
        <>
            <div className="cardContainer contentBg container">
                <div className="d-flex justify-content-between mt-3 mb-2">
                    <div className="d-flex">
                        <NavLink to={`/profile/${usermail}`}><img src={profile_pic} alt="Profile_Picture" className="post-userpic me-2" /></NavLink>
                        {/* <Link to="/profile"><img src={profile_pic} alt="Profile_Picture" className="post-userpic me-2" /></Link> */}
                        <div>
                            {
                                username ? <h4 className={`${style.profile_name} my-auto`}>{username}</h4> : <h4 className={`${style.profile_name} my-auto`}>Unknown</h4>
                            }
                            <small>{date}</small>
                        </div>
                    </div>
                    <div>
                        {
                            (currentuser === usermail) && <Threedot id={id}/>
                        }
                    </div>
                </div>
                <div className="d-flex">
                    <h5 className="mt-2 me-4">#{post_topic}</h5>
                    {
                        no_of_vacancy &&
                        <h5 className="mt-2">#No. of vacancy : {no_of_vacancy}</h5>
                    }
                </div>
                <div>
                    {
                        post_header && <h3 className="mt-2 mb-3"> {post_header} </h3>
                    }
                    <Article text={post} />
                    {
                        image && <img src={`data:image/png;base64,${image.img}`} alt="Post_image-if-uploaded" className={`${style.postImage}`} />
                    }
                </div>
                <div className="mt-3 mb-3">
                    <label className="mt-2 me-4"><FontAwesomeIcon icon={faHeart} /> 300 </label>
                    {/* <label><FontAwesomeIcon icon={faCommenting} /><button onClick={handleComment} className={`${style.addComment}`}>  Add comment</button></label> */}
                </div>
                {/* <div>
                    <Comments comment={comment} />
                </div> */}
            </div>
        </>
    );
}

export default PostCard;