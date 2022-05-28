// component is about the students info who are currently Looking
// for job on different different company;

import useUser from '../../../../custom_hooks/all_user/useUser';
import JobFootprint from '../../../shared-components/users/UserCard';

function JobNeededUsers() {
    const { state } = useUser('active');
    const { loading, error, user } = state;

    return (
        <>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                user.result && user.result.map(data => <JobFootprint key={data._id} props={data} />)
            }
            {
                !loading && user.message && <h3 className="text-center">No data found</h3>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
        </>
    );
}
export default JobNeededUsers;