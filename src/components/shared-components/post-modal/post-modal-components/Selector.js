import { useState } from 'react';
// import { InputField } from "../../input-field/InputField";
const options = ["Software", "Ai", "ML", "Distributed-system", "Job-Post"];

function Selector() {
    const [jobselect, setJobselect] = useState("");
    const selectorChange = (event) => {
        setJobselect(event.target.value);
    }
    return (
        <>
            <select onChange={selectorChange} className="w-100 input-field mt-4" name="post" type="text" value={jobselect}>
                {
                    options.map((option) => <option key={Math.random() * 10} value={option} name="post-type">{option}</option>)
                }
            </select> <br />
            {
                jobselect === 'Job-Post' &&
                <>
                    <input className="w-100 input-field mt-3 mb-4" name="no-of-vacancy" type="text" placeholder=" Enter Number of vacancy" />
                </>
            }
        </>
    );
}
export default Selector;