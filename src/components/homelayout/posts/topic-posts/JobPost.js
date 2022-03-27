import PostCard from "../../../shared-components/posts/PostCard";

const demoProps={
    type:'Job-Post',
    vacancy:4,
    img:true,
    header:"Job-Post"
}

function JobPosts() {
    return (
        <>
            <PostCard props={demoProps}/>
        </>
    );
}

export default JobPosts;