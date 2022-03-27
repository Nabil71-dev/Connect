import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import profile_pic from '../../../styles/assets/Profile_pic.png';
import style from '../../../styles/comment.module.css';

function Comments({ comment }) {
    return (
        <>
            {
                comment && <>
                    <div className={`${style.commentContainer}`}>
                        <div className={`${style.comment} m-2`}>
                            <div className={`${style.commenter} d-flex`}>
                                <img src={profile_pic} alt="Profile_pic" className={`${style.commenterImg} me-1 mb-1`} />
                                <h6>Nabil71-dev</h6>
                            </div>
                            <p>Im comment</p>
                        </div>
                        <div className={`${style.comment} m-2`}>
                            <div className={`${style.commenter} d-flex`}>
                                <img src={profile_pic} alt="Profile_pic" className={`${style.commenterImg} me-1 mb-1`} />
                                <h6>Nabil71-dev</h6>
                            </div>
                            <p>Im comment</p>
                        </div>
                        <div className="mb-2">
                            <img src={profile_pic} alt="hiAmiPic" className={`${style.commenterImg} me-1 mb-2`}/>
                            <input className="input-field" type="text" />
                            <button><FontAwesomeIcon icon={faPlay} className={`${style.icon}`}/></button>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Comments;