import { ErrorMessage, useField } from 'formik';

export const InputField = ({ ...props }) => {
    const [field] = useField(props);
    return (
        <>
            <div className="form-floating">
                <input {...props} {...field}/>
                <label htmlFor={field.name} >{props.placeholder}</label>
            </div>
            {/* <input {...props} {...field} /> <br /> */}
            <ErrorMessage component="small" name={field.name} className="text-danger" />
        </>
    )
};