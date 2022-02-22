import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from "../../../../input-field/InputField";
import style from "../../../../../styles/notify.module.css"
import Selector from './Selector';
import Textarea from './Textarea';

function PostModal({ modalSet }) {

    const validate = Yup.object({
        title: Yup.string().min(20, 'Title must be greater than 12 character').required('Title Required'),
        briefPost: Yup.string().min(200, 'Post must be greater than 40 character').required('Post Required'),
    });

    return (
        <div className={`${style.modalContainer} alignCenter`}>
            <div className={`${style.modal} alignCenter`}>
               <Formik initialValues={{ title: '', briefPost: '' }} validationSchema={validate}>
                    {formik => (
                        <div>
                            <Form>
                                <InputField className={`${style.inputwidth} input-field`} name="title" type="text" placeholder=" Enter post title" /> <br />
                                <Selector /> <br />
                                <Textarea  className={`${style.textArea} input-field`} name="briefPost" placeholder=" Brief post"/> <br />
                                <InputField className={`${style.uploadfile} input-field`} name="photo" type="file"/>
                                <div className={`${style.btnContainer} mt-5`}>
                                    <button className="button-main" type="submit">Submit</button>
                                    <button className="button-main" onClick={modalSet}>Close</button>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik> 
            </div>
        </div>
    );
}
export default PostModal;