import { ErrorMessage,useField } from 'formik';

export const InputField=({...props})=>{
    const[field]=useField(props);
    return(
        <>
            <input className="input-field"{...props} {...field}/> <br/>
            <ErrorMessage component="small" name={field.name} className="error"/>
        </>
    )
};