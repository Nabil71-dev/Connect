import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile} from '@fortawesome/free-solid-svg-icons';

function UserInfo() {
    return (
        <div className="mt-5">
            <div>
                <h3>Works at</h3>
                <div className="ms-4 mt-2">
                    <h4>Company name</h4>
                    <p>Position</p>
                </div>
            </div>
            <div className="mt-5">
                <h3>Personal info</h3>
                <div className="ms-4 mt-2">
                    <p className="h-12"><label>Fullname : </label> Mahmudul Hasan Nabil</p>
                    <p className="h-12"><label>Department : </label> CSE</p>
                    <p><label>Batch : </label> 48th</p>
                    <h5><FontAwesomeIcon icon={faLinkedin} /> LindIn</h5>
                    <h5><FontAwesomeIcon icon={faGithub} /> Github</h5>
                    <h5><FontAwesomeIcon icon={faFile} /> CV</h5>
                </div>
            </div>
            <div className="mt-5">
              <h3>Looking for Job.?</h3>
              <h5 className="ms-4">Active</h5>
            </div>
        </div>
    );
}

export default UserInfo;