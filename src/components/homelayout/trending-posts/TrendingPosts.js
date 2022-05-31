import SharePost from "../../shared-components/share-post-button/SharePost";
import RecentJobs from "./trendy-posts-components/RecentJobPosts";
import ToptrendingPosts from "./trendy-posts-components/TopReactedPosts";

function TrendingPosts() {
    return (
        <>
            <SharePost />
            <ToptrendingPosts /> <br />
            <RecentJobs />
        </>
    );
}

export default TrendingPosts;