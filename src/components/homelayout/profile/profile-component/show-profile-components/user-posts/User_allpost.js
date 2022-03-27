import SharePost from "../../../../../shared-components/share-post-button/SharePost";
import Posts from "../../../../posts/topic-posts/Post";

function UserAllpost() {
    return (
        <>
            <div className="mb-2">
                <SharePost />
            </div>
            <Posts />
        </>
    );
}

export default UserAllpost;