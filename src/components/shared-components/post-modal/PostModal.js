import Modal from 'react-modal';
import style from "../../../styles/trending_post.module.css"
import Selector from './post-modal-components/Selector';

//Modal styles
const customStyles = {
    overlay: {
        background: 'rgba(13, 32, 28, 0.774)',
    },
    content: {
        width: '580px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(13, 32, 28, 0)',
        border: 'none',
    },
};
Modal.setAppElement('#root');

function PostModal({ isOpen, closeModal }) {
    const postData = (e) => {
        e.preventDefault();
        const value = new FormData(e.target)
        const data = Object.fromEntries(value.entries())
    }

    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <form onSubmit={postData}>
                    <input className="w-100 input-field" name="title" type="text" placeholder=" Enter post title" required/> <br />
                    <Selector /> <br />
                    <textarea className={`${style.textArea} w-100 input-field mb-3`} name="briefPost" placeholder=" Brief post" required/> <br />
                    <input className="input-field" name="photo" type="file" />
                    <div className="text-center mt-5">
                        <button className="button-main ms-2 me-2" type="submit">Submit</button>
                        <button className="button-main ms-2 me-2" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
export default PostModal;