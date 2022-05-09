import SharePost from "../../../../../shared-components/share-post-button/SharePost";
import Posts from "../../../../posts/topic-posts/Post";
import { useParams } from "react-router-dom";
import useUserpost from "../../../../../../custom_hooks/user_post/useUserpost";
import PostCard from "../../../../../shared-components/posts/PostCard";
function UserAllpost() {
    const { mail } = useParams();

    const { state } = useUserpost(mail);
    const { loading, error, userpost } = state;
    // if (userpost.length) {
    //     console.log(userpost)
    // }

    return (
        <>
            <div className="mb-2">
                <SharePost />
            </div>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                userpost.length > 0 && userpost.map(data => <PostCard key={data._id} props={data} />)
            }
            {
                !loading && userpost.length === 0 && <div>No data found</div>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
            {/* <Posts /> */}
        </>
    );
}

export default UserAllpost;