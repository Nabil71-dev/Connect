import Modal from 'react-modal'
import Modalform from './post-modal-components/ModalForm'
import EditModal from './edit-modal-components/EditModal'

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
}

Modal.setAppElement('#root');

function PostModal({ isOpen, closeModal,type }) {
    return (
        <>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                {
                     type==='insert' ? <Modalform closeModal={closeModal}/> : <EditModal id={type} closeModal={closeModal}/>
                }
                <hr />
                <strong className="text-danger">Be careful while uploading picture, you wont get chance to edit post pic, so if upload wrong one change it before posting this one</strong>
            </Modal>
        </>
    );
}
export default PostModal;