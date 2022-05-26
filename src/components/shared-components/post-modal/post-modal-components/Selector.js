import { useState } from 'react';
const options = ["Software", "Ai-ML", "Distributed-system", "Job-Post","Others"];

function Selector() {
    const [jobselect, setJobselect] = useState("");
    const selectorChange = (event) => {
        setJobselect(event.target.value);
    }
    return (
        <>
            <div className="form__group field">
                <select onChange={selectorChange} className="form__field w-100" name="post_topic" type="text" value={jobselect}>
                    {
                        options.map((option) => <option className="text-dark" key={Math.random() * 10} value={option} name="post-type">{option}</option>)
                    }
                </select>
            </div>
            {
                jobselect === 'Job-Post' &&
                <div className="form__group field">
                    <input className="form__field w-100" name="no_of_vacancy" type="text" placeholder=" Enter Number of vacancy" />
                    <label htmlFor="no_of_vacancy" className="form__label"> Enter Number of vacancy</label>
                </div>
            }
        </>
    );
}
export default Selector;