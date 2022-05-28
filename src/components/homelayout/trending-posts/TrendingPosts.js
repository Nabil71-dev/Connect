import SharePost from "../../shared-components/share-post-button/SharePost";
import RecentJobs from "./trendy-posts-components/RecentJobPosts";
import TopPosts from "./trendy-posts-components/TopReactedPosts";

function TrendingPosts() {
    return (
        <>
            <SharePost />
            <TopPosts /> <br />
            <RecentJobs />
        </>
    );
}

export default TrendingPosts;