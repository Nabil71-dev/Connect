import {useState} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField } from '../../shared-components/input-field/InputField';
import { useAuth } from '../../../context/AuthContext';

const RegisterForm = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [conpasswordShown, setConPasswordShown] = useState(false);
    const showhidepass = () => {
        setPasswordShown(!passwordShown);
    };
    const showhideconpass = () => {
        setConPasswordShown(!conpasswordShown);
    };

    const {reg_w_email}=useAuth();

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
            <Formik initialValues={{ email: '', password: '', confirmpass: '' }} validationSchema={validate} onSubmit={(value,{resetForm}) => {
                const data={
                    email:value.email,
                    password:value.password
                }
                resetForm({value:''})
                //console.log(data)
                reg_w_email(data)
            }}>
                {formik => (
                    <div>
                        <Form className="px-5">
                            <InputField name="email" type="text" value={formik.values.email} placeholder=" Enter your mail" /> <br />
                            <InputField name="password"  type={passwordShown ? "text" : "password"} value={formik.values.password} placeholder=" Enter your password" showhidepass={showhidepass}/> <br />
                            <InputField name="confirmpass"  type={conpasswordShown ? "text" : "password"} value={formik.values.confirmpass} placeholder=" Confirm password" showhidepass={showhideconpass}/> <br />
                            <button className="button-main" type="submit" >Register</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default RegisterForm;