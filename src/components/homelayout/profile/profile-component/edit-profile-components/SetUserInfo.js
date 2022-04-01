import logo from '../../../../../styles/assets/Logo.svg'
import pic from '../../../../../styles/assets/Picture.svg';
import style from '../../../../../styles/set_profile.module.css';

function SetUserinfo() {

  return (
    <>
      <img src={logo} alt="logo" />
      <img className={`${style.picup}`} src={pic} alt="profile-pic" />
      <input type="file" name="user_pic"/>
      <div className="mt-5">
        <h4>Personal info</h4>
        <input className="input-field w-100 mt-2" name="fullname" type="text" placeholder=" Enter full name" />
        <input className="input-field w-100 mt-2" name="username" type="text" placeholder=" Enter username" />
        <input className="input-field w-100 mt-2" name="email" type="text" placeholder=" Enter email" />
        <input className="input-field w-100 mt-2" name="personalweb" type="text" placeholder=" Enter personal website URL" />
      </div>
    </>
  );
}

export default SetUserinfo;