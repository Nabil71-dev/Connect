import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../../styles/trending_post.module.css';

function TrendingPost({ props }) {
    const { name, subject, icon, number } = props;
    
    return (
        <>
            {
                props && <div className="d-flex mt-3 mb-2">
                    <div className={`${style.list}`} />
                    <div className="d-flex">
                        <div className="me-3">
                            <h5 className="text-secondary">{name}</h5>
                            <h6>{subject}</h6>
                        </div>
                        <div className="alignCenter">
                            <FontAwesomeIcon icon={icon} className={`${style.rateicon}`} />{number}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default TrendingPost;