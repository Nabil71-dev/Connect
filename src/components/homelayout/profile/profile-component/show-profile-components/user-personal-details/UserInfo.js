import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function UserInfo({ props }) {
    const { working, fullname, job_title, department_name, batch_no, profile_links, cv } = props
    return (
        <div className="mt-5">
            <div>
                <h3>Works at</h3>
                <div className="ms-4 mt-2">
                    {
                        working?.company_name ? <h4>{working?.company_name}</h4> : <h4>No working history</h4>
                    }
                    {
                        working?.job_post ? <h6>{working?.job_post}</h6> : <h6>No position defined</h6>
                    }
                </div>
            </div>
            <div className="mt-5">
                <h3>Personal info</h3>
                <div className="ms-4 mt-2">
                    {
                        fullname ? <p className="h-12"><label>Fullname : </label> {fullname}</p> :
                            <p className="h-12"><strong>Fullname : </strong>Not set yet</p>
                    }
                    {
                        department_name ? <p className="h-12"><label>Department : </label> {department_name}</p> :
                            <p className="h-12"><strong>Department : </strong>Not set yet</p>
                    }
                    {
                        batch_no ? <p><label>Batch : </label> {batch_no}</p> :
                        <p><strong>Batch : </strong> Not set yet</p>
                    }
                    {
                        profile_links?.linkedin ? <h5><FontAwesomeIcon icon={faLinkedin} /></h5> :
                            <h5><FontAwesomeIcon icon={faLinkedin} /> <small> Not set yet</small></h5>
                    }
                    {
                        profile_links?.linkedin ? <h5><FontAwesomeIcon icon={faGithub} /></h5> :
                            <h5><FontAwesomeIcon icon={faGithub} /><small> Not set yet</small></h5>
                    }
                    {
                        cv ? <h5><FontAwesomeIcon icon={faFile} /></h5> :
                            <h5><FontAwesomeIcon icon={faFile} /> Not uploaded yet</h5>
                    }
                </div>
            </div>
            <div className="mt-5">
                <h3>Looking for Job.?</h3>
                {
                    job_title === 'active' ? <h5 className="ms-4 text-success">Active</h5> : <h5 className="ms-4">inactive</h5>
                }
            </div>
        </div>
    );
}

export default UserInfo;