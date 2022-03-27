import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared-components/input-field/InputField';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
    const validate = Yup.object({
        email: Yup.string().email('Invalid mail').required('Email Required'),
        password: Yup.string().required('Password Required'),
    });

    return (
        <>
            <Formik initialValues={{ email: '', password: '' }} validationSchema={validate}>
                {formik => (
                    <div>
                        <Form>
                            <InputField className="input-field w-75" name="email" type="text" placeholder=" Enter your mail" /> <br />
                            <InputField className="input-field w-75" name="password" type="password" placeholder=" Enter your password" /> <br />
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