import logo from '../../../../../styles/assets/Logo.svg'
import pic from '../../../../../styles/assets/Picture.svg';
import style from '../../../../../styles/editprofile.module.css';

function PersonalinfoEdit() {
    return ( 
        <>
          <img src={logo} alt="logo" />
          <img className={`${style.picup}`} src={pic} alt="profile-pic" />
          <input type="file" />
          <div className="mt-5">
              <h4>Personal info</h4>
              <input className="input-field mt-2" type="text" placeholder=" Enter full name"/>
              <input className="input-field mt-2" type="text" placeholder=" Enter username"/>
              <input className="input-field mt-2" type="text" placeholder=" Enter email"/>
              <input className="input-field mt-2" type="text" placeholder=" Enter personal website URL"/>
          </div>
        </>
     );
}

export default PersonalinfoEdit;