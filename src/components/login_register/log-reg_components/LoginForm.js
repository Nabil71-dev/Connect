import {useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared-components/input-field/InputField';
import { useAuth } from '../../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons'


const LoginForm = () => {
    const { login_w_email } = useAuth();

    const [passwordshown, setPasswordShown] = useState(false);
    const showhidepass = () => {
        setPasswordShown(!passwordshown);
    };

    const validate = Yup.object({
        user_email: Yup.string().email('Invalid mail').required('Email Required'),
        user_password: Yup.string().required('Password Required'),
    });

    return (
        <>
            <Formik initialValues={{ user_email: '', user_password: '' }} validationSchema={validate} onSubmit={(value, { resetForm }) => {
                resetForm({ value: '' })
                login_w_email(value)
                //console.log(value)
            }} >
                {formik => (
                    <Form className="px-5">
                        <InputField name="user_email" type="text" value={formik.values.user_email} placeholder=" Enter your mail" /><br />
                        <InputField name="user_password" type={passwordshown ? "text" : "password"}  value={formik.values.user_password} placeholder=" Enter your password" showhidepass={showhidepass}/> <br />
                        <button className="button-main" type="submit"><FontAwesomeIcon icon={faSignIn} /> Login</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;