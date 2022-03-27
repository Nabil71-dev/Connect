import PostCard from "../../../shared-components/posts/PostCard";

const demoProps={
    type:'Ai & Ml',
    header:"Ai & Ml"
}

function AI_ML_POST() {
    return ( 
        <>
          <PostCard props={demoProps}/>
        </>
    );
}

export default AI_ML_POST;