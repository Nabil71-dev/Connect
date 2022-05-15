import logo from '../../../../../styles/assets/Logo.svg'
import pic from '../../../../../styles/assets/Picture.svg';
import style from '../../../../../styles/set_profile.module.css';

function SetUserinfo() {

  return (
    <>
      <img src={logo} alt="logo" />
      <img className={`${style.picup}`} src={pic} alt="profile-pic" />
      <input type="file" name="user_pic" />
      <div className="mt-5">
        <h4>Personal info</h4>
        <div className="form__group field">
          <input className="form__field w-100 mt-2" name="fullname" type="text" placeholder=" Enter full name" />
          <label htmlFor="fullname" className="form__label">Enter full name</label>
        </div>
        <div className="form__group field">
          <input className="form__field w-100 mt-2" name="username" type="text" placeholder=" Enter username" />
          <label htmlFor="username" className="form__label">Enter username</label>
        </div>
        <div className="form__group field">
          <input className="form__field w-100 mt-2" name="personalweb" type="text" placeholder=" Enter personal website URL" />
          <label htmlFor="personalweb" className="form__label">Enter personal website URL</label>
        </div>
      </div>
    </>
  );
}

export default SetUserinfo;