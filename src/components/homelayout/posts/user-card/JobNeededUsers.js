// component is about the students info who are currently Looking
// for job on different different company;

import {useApi} from '../../../../custom_hooks/fetchData/useApi';
import JobFootprint from '../../../shared-components/users/UserCard';

function JobNeededUsers() {
    const {state,postdata }=useApi()
    postdata(`http://localhost:8080/user/active`);
    const { loading, error, data } = state;

    return (
        <>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                data.result && data.result.map(data => <JobFootprint key={data._id} props={data} />)
            }
            {
                !loading && data.message && <h3 className="text-center">No data found</h3>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
        </>
    );
}
export default JobNeededUsers;