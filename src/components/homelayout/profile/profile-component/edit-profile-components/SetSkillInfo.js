import style from '../../../../../styles/set_profile.module.css';

function SetSkillinfo() {
    return (
        <>
            <div className="p-2">
                <h4>Varsity related info</h4>
                <div className="form__group field">
                    <input className="form__field w-100" name="department_name" type="text" placeholder=" Enter deprtment name" />
                    <label htmlFor="department_name" className="form__label"> Enter deprtment name</label>
                </div>
                <div className="form__group field">
                    <input className="form__field" name="batch_no" type="text" placeholder=" Enter batch no." />
                    <label htmlFor="batch_no" className="form__label"> Enter batch no.</label>
                </div>
            </div>
            <div className="mt-5 p-2">
                <h4>Work info</h4>
                <div className="form__group field">
                    <input className="form__field w-100" name="company_name" type="text" placeholder=" Enter compnay name" />
                    <label htmlFor="company_name" className="form__label"> Enter compnay name</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="working_stack" type="text" placeholder=" Enter working stack" />
                    <label htmlFor="working_stack" className="form__label"> Enter working stack</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="working_city" type="text" placeholder=" Enter working city" />
                    <label htmlFor="working_city" className="form__label"> Enter working city</label>
                </div>
            </div>
            <div className="mt-4 p-2">
                <h4>Profile links</h4>
                <div className="form__group field">
                    <input className="form__field w-100" name="github" type="text" placeholder=" Github link" />
                    <label htmlFor="github" className="form__label"> Github link</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="linkdin" type="text" placeholder=" LinkedIn link" />
                    <label htmlFor="linkdin" className="form__label"> LinkedIn link</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="codeforce" type="text" placeholder=" CF link" />
                    <label htmlFor="codeforce" className="form__label"> CF link</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="hackerrank" type="text" placeholder=" Hackerrank link" />
                    <label htmlFor="hackerrank" className="form__label"> Hackerrank link</label>
                </div>
                <div className="form__group field">
                    <input className="form__field w-100" name="leetcode" type="text" placeholder=" Leetcode link" />
                    <label htmlFor="leetcode" className="form__label"> Leetcode link</label>
                </div>
                <div className="form__group field">
                    <textarea className={`${style.textarea} form__field w-100`} name="personal_description" type="text" placeholder=" Enter description about working" />
                    <label htmlFor="personal_description" className="form__label"> Enter description about working</label>
                </div>
            </div>
        </>
    );
}

export default SetSkillinfo;