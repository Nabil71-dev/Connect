import PostCard from "../../../shared-components/posts/PostCard";

const demoProps = {
    type: 'Distributed system',
    header:"Distributed system"
}

function DistributedSys() {
    return (
        <>
            <PostCard props={demoProps} />
        </>
    );
}

export default DistributedSys;