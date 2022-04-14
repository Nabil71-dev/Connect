// component is about the students info who are currently working
// on different different company;

//Comment part is just for data load from server
//import useUser from '../../../../custom_hooks/all_user/useUser';

import JobFootprint from '../../../shared-components/users/UserCard';

function UserFootPrints() {
    // const {state}=useUser('inactive');
    // const{loading,error,user}=state;
    // if(user.length){
    //     console.log(user)
    // }

    return (
        <>
            <JobFootprint props="Company name"/>
        </>
    );
}

export default UserFootPrints;