import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import { InputField } from "../../../../input-field/InputField";
import style from "../../../../../styles/notify.module.css"
import Selector from './Selector';
import Textarea from './Textarea';

//Modal styles
const customStyles = {
    overlay:{
        background:'rgba(13, 32, 28, 0.774)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background:'rgba(13, 32, 28, 0)',
        border:'none',
    },
};

Modal.setAppElement('#root');

function PostModal({ modalSet }) {

    const validate = Yup.object({
        title: Yup.string().min(20, 'Title must be greater than 12 character').required('Title Required'),
        briefPost: Yup.string().min(200, 'Post must be greater than 40 character').required('Post Required'),
    });

    return (
        <>
            <Modal
                isOpen={modalSet}
                onRequestClose={modalSet}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Formik initialValues={{ title: '', briefPost: '' }} validationSchema={validate}>
                    {formik => (
                        <div>
                            <Form>
                                <InputField className={`${style.inputwidth} input-field`} name="title" type="text" placeholder=" Enter post title" /> <br />
                                <Selector /> <br />
                                <Textarea className={`${style.textArea} input-field`} name="briefPost" placeholder=" Brief post" /> <br />
                                <InputField className={`${style.uploadfile} input-field`} name="photo" type="file" />
                                <div className={`${style.btnContainer} mt-5`}>
                                    <button className="button-main" type="submit">Submit</button>
                                    <button className="button-main" onClick={modalSet}>Close</button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>
            </Modal>
        </>
    );
}
export default PostModal;