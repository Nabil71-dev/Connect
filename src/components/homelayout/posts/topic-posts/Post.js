import usePost from '../../../../custom_hooks/all_post/usePost';
import PostCard from "../../../shared-components/posts/PostCard";

function Posts() {

    const {state}=usePost();
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

export default Posts;