import TopicsVacancy from "./job-topic_component/Topic_vacancy";

const demoProps={
    type:'Job-Post',
    vacancy:4,
    img:true,
    header:"Job-Post"
}

function JobPosts() {
    return (
        <>
            <TopicsVacancy props={demoProps}/>
        </>
    );
}

export default JobPosts;