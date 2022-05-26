import PostCard from "../../../shared-components/posts/PostCard";
import useTopicPost from '../../../../custom_hooks/topic_post/useTopicPost';

function Software() {
    const {state}=useTopicPost('software');
    const{loading,error,post}=state;
    
    return (
        <>
        {
            loading && <h3 className="text-center">Loading...</h3>
        }
        {
            post.result && post.result.map(data => <PostCard key={data._id} props={data}/>)
        }
        {
            !loading && post.message && <h3 className="text-center">No data found</h3>
        }
        {
            error && <h3 className="text-center">{error}</h3>
        }
        </>
    );
}

export default Software;