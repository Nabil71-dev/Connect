import RecentJobs from "./trendy-posts-components/RecentJobPosts";
import ToptrendingPosts from "./trendy-posts-components/TopReactedPosts";

function TrendingPosts() {
    return (
        <>
            <ToptrendingPosts /> <br />
            <RecentJobs />
        </>
    );
}

export default TrendingPosts;