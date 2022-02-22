import { ErrorMessage,useField } from 'formik';

export const InputField=({...props})=>{
    const[field]=useField(props);
    return(
        <>
            <input {...props} {...field}/> <br/>
            <ErrorMessage component="small" name={field.name} className="error"/>
        </>
    )
};