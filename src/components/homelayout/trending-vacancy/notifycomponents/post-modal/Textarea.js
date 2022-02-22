import { ErrorMessage,useField } from 'formik';

function Textarea({...props}) {
    const[field]=useField(props);
    return (
        <>
          <textarea {...props} {...field}/> <br />
          <ErrorMessage component="small" name={field.name} className="error"/>
        </>
    );
}

export default Textarea;