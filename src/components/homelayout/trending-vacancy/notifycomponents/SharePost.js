import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from '../../../../styles/notify.module.css';

function SharePost() {
    return (
        <div className={`${style.shareContainer} alignCenter`}>
            <div className="alignCenter" >
               <FontAwesomeIcon icon={faPlus} className={`${style.addicon}`}/>
            </div>
            <h4>Share your thoughts / Job Post</h4>
        </div>
    );
}

export default SharePost;