import TopicPosts from "../../../posts/all-post/TopicPost";
import SharePost from "../../../trending-vacancy/notifycomponents/SharePost";
function PostsShare() {
    return (
        <>
            <div className="mb-2">
                <SharePost />
            </div>
            <TopicPosts />
        </>
    );
}

export default PostsShare;