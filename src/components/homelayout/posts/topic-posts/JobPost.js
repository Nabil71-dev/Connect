//Comment part is just for data load from server
import PostCard from "../../../shared-components/posts/PostCard";
//import useTopicPost from '../../../../custom_hooks/topic_post/useTopicPost';

const demoProps={
    type:'Job-Post',
    vacancy:4,
    img:true,
    header:"Job-Post"
}

function JobPosts() {
    // const {state}=useTopicPost('jobpost');
    // const{loading,error,post}=state;
    // if(post.length){
    //     console.log(post)
    // }

    return (
        <>
            <PostCard props={demoProps}/>
        </>
    );
}

export default JobPosts;