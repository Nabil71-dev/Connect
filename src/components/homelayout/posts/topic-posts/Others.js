import PostCard from "../../../shared-components/posts/PostCard";

const demoProps={
    type:'Others',
    header:"Others"
}

function OthersPost() {
    return ( 
        <>
         <PostCard props={demoProps}/>
        </>
     );
}
export default OthersPost;