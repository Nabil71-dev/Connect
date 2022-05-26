import { ErrorMessage, useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const InputField = ({ ...props }) => {
    const [field] = useField(props);

    return (
        <>
            <div className="form__group field">
                <input className="form__field w-100" {...props} {...field} />
                {
                    props.type === 'password' ?
                        <label htmlFor={field.name} className="form__label">{props.placeholder} <FontAwesomeIcon onClick={props.showhidepass} icon={faEye} /></label> :
                        <label htmlFor={field.name} className="form__label">{props.placeholder}</label>
                }
            </div>
            <ErrorMessage component="small" name={field.name} className="text-danger" />
        </>
    )
};