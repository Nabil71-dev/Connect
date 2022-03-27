import { useState } from 'react';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { InputField } from "../../input-field/InputField";

const options = ["Software", "Ai", "ML", "Distributed-system", "Job-Post"];

function Selector() {

    const [jobselect, setJobselect] = useState("");
    const selectorChange = (event) => {
        setJobselect(event.target.value);
    }

    const validate = Yup.object({
        noOfVacancy: Yup.string().required('No of vacancy required'),
    });

    return (
        <>
            <Formik initialValues={{noOfVacancy: '' }} validationSchema={validate}>
                {formik => (
                    <>
                        <select onChange={selectorChange} className="w-100 input-field" name="post" type="text" value={jobselect}>
                            {
                                options.map((option) => <option key={Math.random() * 10} value={option}>{option}</option>)
                            }
                        </select> <br />
                        {
                            jobselect === 'Job-Post' &&
                            <>
                                <InputField className="w-100 input-field mt-3" name="noOfVacancy" type="text" placeholder=" Enter Number of vacancy" />
                            </>
                        }
                    </>
                )}
            </Formik>
        </>
    );
}
export default Selector;