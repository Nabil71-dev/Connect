import {Routes,Route} from 'react-router-dom';
import FootPrints from './job-footprints/FootPrints';
import LookingJob from './job-footprints/JobNeed';
import TopicPosts from './all-post/TopicPost';
import JobPosts from './all-post/JobPost';
import SoftwarePost from './all-post/SoftwarePost';
import AI_ML_POST from './all-post/Ai_Ml';
import DistributedSys from './all-post/DistSys';
import OthersPost from './all-post/Others';

function AllPosts() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TopicPosts />} />
                <Route path="/allposts" element={<TopicPosts />} />
                <Route path="/Software" element={<SoftwarePost />} />
                <Route path="/Ai-ML" element={<AI_ML_POST />} />
                <Route path="/distributed-system" element={<DistributedSys />} />
                <Route path="/Others" element={<OthersPost />} />
                <Route path="/jobposts" element={<JobPosts />} />
                <Route path="/footprints" element={<FootPrints />} />
                <Route path="/lookingjob" element={<LookingJob />} />
            </Routes>
        </>
    );
}

export default AllPosts;