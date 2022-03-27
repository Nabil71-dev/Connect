import AI_ML_POST from './Ai_Ml';
import DistributedSys from './DistSys';
import JobPosts from './JobPost';
import OthersPost from './Others';
import SoftwarePost from './SoftwarePost';

function Posts() {
    return (
        <>
           <AI_ML_POST />
           <DistributedSys />
           <JobPosts />
           <OthersPost />
           <SoftwarePost />
        </>
    );
}

export default Posts;