//Comment part is just for data load from server
import PostCard from "../../../shared-components/posts/PostCard";
//import useTopicPost from '../../../../custom_hooks/topic_post/useTopicPost';

const demoProps = {
    type: 'Distributed system',
    header:"Distributed system"
}

function DistributedSys() {
    // const {state}=useTopicPost('distributedsys');
    // const{loading,error,post}=state;
    // if(post.length){
    //     console.log(post)
    // }
    
    return (
        <>
            <PostCard props={demoProps} />
        </>
    );
}

export default DistributedSys;