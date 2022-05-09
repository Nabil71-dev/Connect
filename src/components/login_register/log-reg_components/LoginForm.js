//Comment part will be used after completing server

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared-components/input-field/InputField';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const LoginForm = () => {
    const{login_w_email}=useAuth();

    const validate = Yup.object({
        user_email: Yup.string().email('Invalid mail').required('Email Required'),
        user_password: Yup.string().required('Password Required'),
    });

    return (
        <>
            <Formik initialValues={{ user_email: '', user_password: '' }} validationSchema={validate} onSubmit={(value,{resetForm}) => {
                resetForm({value:''})
                login_w_email(value)
                //console.log(value)
            }} >
                {formik => (
                    <Form>
                        <InputField className="form-control input-field w-100" name="user_email" type="text" value={formik.values.user_email} placeholder=" Enter your mail" /> <br />
                        <InputField className="form-control input-field w-100" name="user_password" type="password" value={formik.values.user_password} placeholder=" Enter your password" /> <br />
                        {/* Dummy links to check routes */}
                        <button className="button-main" type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;