//Comment part is just for data load from server
import usePost from '../../../../custom_hooks/all_post/usePost';
import PostCard from "../../../shared-components/posts/PostCard";

// import AI_ML_POST from './Ai_Ml';
// import DistributedSys from './DistSys';
// import JobPosts from './JobPost';
// import OthersPost from './Others';
// import Software from './Software';


function Posts() {

    const {state}=usePost();
    const{loading,error,post}=state;
    // if(post.length){
    //     console.log(post);
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
           {/* <AI_ML_POST />
           <DistributedSys />
           <JobPosts />
           <OthersPost />
           <Software /> */}
        </>
    );
}

export default Posts;