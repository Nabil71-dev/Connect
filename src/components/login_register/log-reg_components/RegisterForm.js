import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../input-field/InputField';

const RegisterForm = () => {

    const validate = Yup.object({
        email: Yup.string().email('Invalid mail').required('Email Required'),
        password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ).required('Password Required'),
        confirmpass: Yup.string().oneOf([Yup.ref('password'), null], 'password must be same')
            .required('Confirm Password Required'),
    });

    return (
        <div>
            <Formik initialValues={{ email: '', password: '', confirmpass: '' }} validationSchema={validate}>
                {formik => (
                    <div>
                        <Form>
                            <InputField className="input-field" name="email" type="text" placeholder=" Enter your mail" /> <br/>
                            <InputField className="input-field" name="password" type="password" placeholder=" Enter your password" /> <br/>
                            <InputField className="input-field" name="confirmpass" type="password" placeholder=" Confirm password" /> <br/>
                            <button className="button-main" type="submit" >Register</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;