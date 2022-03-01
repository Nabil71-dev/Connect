import { NavLink } from 'react-router-dom';
import PersonalinfoEdit from './editprofile-components/PersonalInfoEdit';
import SkillinfoEdit from './editprofile-components/SkillInfoEdit';
import WorkinfoEdit from './editprofile-components/WorkInfoEdit';

function EditProfile() {
  return (
    <form>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-3 ms-3 me-1">
            <PersonalinfoEdit />
          </div>
          <div className="col-6 pt-5">
            <SkillinfoEdit />
          </div>
          <div className="col-2 pt-5">
            <WorkinfoEdit />
          </div>
        </div>
      </div>
      <div className="container text-end mt-4">
        <NavLink to="/profile"> <button className="button-main mb-5" type="submit">Submit</button></NavLink>
      </div>
    </form>
  );
}

export default EditProfile;