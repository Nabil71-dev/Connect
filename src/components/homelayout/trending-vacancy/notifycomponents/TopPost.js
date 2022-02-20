import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/notify.module.css';

function TrendingPost({ toppost, jobpost }) {
    return (
        <>
            {
                toppost && <div className={`${style.toppostContainer} mt-4`}>
                    <h4>Trending Post</h4>
                    <div className="d-flex">
                        <div className={`${style.list}`}></div>
                        <div className="d-flex">
                            <div className={`${style.toppostDetails}`}>
                                <h5>Im Publisher </h5>
                                <h6>Post heading </h6>
                            </div>
                            <div className="alignCenter">
                                <FontAwesomeIcon icon={faHeart} className={`${style.rateicon}`} />200
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                jobpost && <div className={`${style.toppostContainer} mt-5`}>
                    <h4>Recent Job</h4>
                    <div className="d-flex">
                        <div className={`${style.list}`}></div>
                        <div className="d-flex">
                            <div className={`${style.toppostDetails}`}>
                                <h5>Publisher </h5>
                                <h6>Job Post</h6>
                            </div>
                            <div className="alignCenter">
                                <FontAwesomeIcon icon={faSearch} className={`${style.rateicon}`} />2
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default TrendingPost;