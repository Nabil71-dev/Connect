import SharePost from "../../../../../shared-components/share-post-button/SharePost";
import { useParams } from "react-router-dom";
import {useApi} from "../../../../../../custom_hooks/fetchData/useApi";
import PostCard from "../../../../../shared-components/posts/PostCard";
function UserAllpost() {
    const { mail } = useParams();
    const {state, postdata }=useApi()
    postdata(`http://localhost:8080/post/userspost/${mail}`);
    const { loading, error, data } = state;

    return (
        <>
            <div className="mb-2">
                <SharePost />
            </div>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                data.result && data?.result.map(data => <PostCard key={data._id} props={data} />)
            }
            {
                !loading && data.message && <div>No data found</div>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
        </>
    );
}

export default UserAllpost;