import { InputField } from '../../../../shared-components/input-field/InputField'

function SetUserinfo() {
  return (
    <>
      <div className="mt-5">
        <h3>Personal info</h3>
        <InputField className="form__field w-100 mt-2" name="fullname" type="text" placeholder=" Enter full name" />
        <InputField className="form__field w-100 mt-2" name="username" type="text" placeholder=" Enter username" />
        <InputField className="form__field w-100 mt-2" name="personalweb" type="text" placeholder=" Enter personal website URL" />
      </div>
      <div className="mt-5">
        <h3>Varsity related info</h3>
        <InputField className="form__field w-100" name="department_name" type="text" placeholder=" Enter deprtment name" />
        <InputField className="form__field" name="batch_no" type="text" placeholder=" Enter batch no." />
      </div>
    </>
  );
}

export default SetUserinfo;