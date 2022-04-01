import { NavLink } from 'react-router-dom';
import SetSkillinfo from './edit-profile-components/SetSkillInfo';
import SetUserinfo from './edit-profile-components/SetUserInfo';
import SetWorkinfo from './edit-profile-components/SetWorkInfo';

function EditProfile() {

  const profileData = e => {
    e.preventDefault();
    const value= new FormData(e.target)
    const data=Object.fromEntries(value.entries())
  }

  return (
    <form onSubmit={profileData}>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-3 ms-3 me-1">
            <SetUserinfo />
          </div>
          <div className="col-6 pt-5">
            <SetSkillinfo />
          </div>
          <div className="col-2 pt-5">
            <SetWorkinfo />
          </div>
        </div>
      </div>
      <div className="container text-end mt-4">
        <NavLink to="/home"><button className="button-main mb-5" type="submit">Submit</button></NavLink>
      </div>
    </form>
  );
}

export default EditProfile;