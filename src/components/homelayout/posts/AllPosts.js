import {Routes,Route} from 'react-router-dom';
import FootPrints from './user-card/UserFootPrints';
import LookingJob from './user-card/JobNeededUsers';
import TopicPosts from './topic-posts/Post';
import JobPosts from './topic-posts/JobPost';
import SoftwarePost from './topic-posts/SoftwarePost';
import AI_ML_POST from './topic-posts/Ai_Ml';
import DistributedSys from './topic-posts/DistSys';
import OthersPost from './topic-posts/Others';

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