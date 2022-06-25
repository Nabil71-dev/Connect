import { InputField } from '../../../../shared-components/input-field/InputField';

function SetSkillinfo() {
    return (
        <>
            <div className="mt-1 p-2">
                <h3>Work info</h3>
                <InputField className="form__field w-100" name="company_name" type="text" placeholder=" Enter compnay name" />
                <InputField className="form__field w-100" name="working_stack" type="text" placeholder=" Enter working stack" />
                <InputField className="form__field w-100" name="working_city" type="text" placeholder=" Enter working city" />
            </div>
            <div className="mt-5 p-2">
                <h3>Profile links</h3>
                <InputField className="form__field w-100" name="github" type="text" placeholder=" Github link" />
                <InputField className="form__field w-100" name="linkdin" type="text" placeholder=" LinkedIn link" />
                <InputField className="form__field w-100" name="codeforce" type="text" placeholder=" CF link" />
                <InputField className="form__field w-100" name="hackerrank" type="text" placeholder=" Hackerrank link" />
                <InputField className="form__field w-100" name="leetcode" type="text" placeholder=" Leetcode link" />
            </div>
        </>
    );
}

export default SetSkillinfo;