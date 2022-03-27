import PostCard from "../../../shared-components/posts/PostCard";

const demoProps={
    type:'Software',
    header:"Software"
}

function SoftwarePost() {
    return (
        <>
          <PostCard props={demoProps}/>
        </>
    );
}

export default SoftwarePost;