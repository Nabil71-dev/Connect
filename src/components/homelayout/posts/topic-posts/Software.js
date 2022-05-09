//Comment part is just for data load from server
import PostCard from "../../../shared-components/posts/PostCard";
import useTopicPost from '../../../../custom_hooks/topic_post/useTopicPost';

// const demoProps={
//     mail:'grn',
//     type:'Software',
//     header:"Software"
// }

function Software() {
    const {state}=useTopicPost('software');
    const{loading,error,post}=state;
    // if(post.length){
    //     console.log(post)
    // }
    
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
          {/* <PostCard props={demoProps}/> */}
        </>
    );
}

export default Software;