// component is about the students info who are currently Looking
// for job on different different company;

//Comment part is just for data load from server
//import useUser from '../../../../custom_hooks/all_user/useUser';

import JobFootprint from '../../../shared-components/users/UserCard';

function JobNeededUsers() {
    // const {state}=useUser('active');
    // const{loading,error,user}=state;
    // if(user.length){
    //     console.log(user)
    // }

    return (
        <>
            <JobFootprint props="Description about experties"/>
        </>
    );
}
export default JobNeededUsers;