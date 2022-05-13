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
            post.length>0 && post.map(data => <PostCard key={data._id} props={data}/>)
        }
        {
            !loading && post.length===0 && <div>No data found</div>
        }
        {
            error && <h3 className="text-center">{error}</h3>
        }
        </>
    );
}

export default Software;