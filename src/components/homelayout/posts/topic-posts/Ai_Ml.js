//Comment part is just for data load from server
import PostCard from "../../../shared-components/posts/PostCard";
//import useTopicPost from '../../../../custom_hooks/topic_post/useTopicPost';

const demoProps={
    type:'Ai & Ml',
    header:"Ai & Ml"
}

function AI_ML_POST() {
    // const {state}=useTopicPost('aiml');
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

export default AI_ML_POST;