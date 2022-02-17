import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from './InputField';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const validate = Yup.object({
        email: Yup.string().email('Invalid mail').required('Email Required'),
        password: Yup.string().min(6, 'Password must be greater than 6 character').max(9, 'Password must be less than or equal 9 character')
            .required('Password Required'),
    });

    return (
        <>
            <Formik initialValues={{ email: '', password: '' }} validationSchema={validate}>
                {formik => (
                    <div>
                        <Form>
                            <InputField name="email" type="text" placeholder=" Enter your mail" /> <br />
                            <InputField name="password" type="password" placeholder=" Enter your password" /> <br />
                            {/* Dummy links to check routes */}
                            <NavLink to="/home"> <button className="button-main" type="submit">Login</button></NavLink>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;