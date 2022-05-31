import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../../styles/trending_post.module.css';
import {useNavigate} from 'react-router-dom';

function TrendingPost({ props }) {
    const navigate=useNavigate()
    const { id, username, post_header, icon, quantity } = props;
    const postDetails = (id) => {
        navigate(`/home/post/${id}`)
    }
    return (
        <>
            {
                props && <div className="d-flex mt-3 mb-2">
                    <div className={`${style.list}`} />
                    <div className="d-flex w-100">
                        <div className={`${style.postwidth} me-3`}>
                            <h5 className="text-secondary">{username}</h5>
                            <h6 className="cursor" onClick={()=>postDetails(id)}>{post_header}</h6>
                        </div>
                        <div className="alignCenter">
                            <FontAwesomeIcon icon={icon} className={`${style.rateicon}`} />{quantity}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default TrendingPost;