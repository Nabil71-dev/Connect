import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared-components/input-field/InputField';

const RegisterForm = () => {

    //Submitted form data from register user
    const regData = (value) => {
        console.log(value)
    }

    const validate = Yup.object({
        email: Yup.string().email('Invalid mail').required('Email Required'),
        password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
        ).required('Password Required'),
        confirmpass: Yup.string().oneOf([Yup.ref('password'), null], 'password must be same')
            .required('Confirm Password Required'),
    });


    return (
        <div>
            <Formik initialValues={{ email: '', password: '', confirmpass: '' }} validationSchema={validate} onSubmit={values => {
                regData(values);
            }}>
                {formik => (
                    <div>
                        <Form>
                            <InputField className="input-field w-75" name="email" type="text" placeholder=" Enter your mail" /> <br />
                            <InputField className="input-field w-75" name="password" type="password" placeholder=" Enter your password" /> <br />
                            <InputField className="input-field w-75" name="confirmpass" type="password" placeholder=" Confirm password" /> <br />
                            <button className="button-main" type="submit" >Register</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;