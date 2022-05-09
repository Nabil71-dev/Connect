import Modal from 'react-modal';
import Modalform from './post-modal-components/ModalForm';

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

    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <Modalform closeModal={closeModal}/>
            </Modal>
        </>
    );
}
export default PostModal;