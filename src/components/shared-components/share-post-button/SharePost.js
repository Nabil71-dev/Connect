import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from '../../../styles/trending_post.module.css';
import PostModal from '../post-modal/PostModal';

function SharePost() {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }
    const closeModal = () => {
        setOpen(false);
    }

    return (
        <div className="d-flex align-items-center">
            <div onClick={openModal} className={`${style.shareAdd} me-3 alignCenter`} >
                <FontAwesomeIcon icon={faPlus} className={`${style.addicon}`} />
            </div>
            <h4>Share your thoughts / Job Post</h4>
            {
                isOpen && <PostModal isOpen={isOpen} closeModal={closeModal} />
            }
        </div>
    );
}

export default SharePost;