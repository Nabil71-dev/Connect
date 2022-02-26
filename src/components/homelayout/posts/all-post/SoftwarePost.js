import TopicsVacancy from "./job-topic_component/Topic_vacancy";

const demoProps={
    type:'Software',
    header:"Software"
}

function SoftwarePost() {
    return (
        <>
          <TopicsVacancy props={demoProps}/>
        </>
    );
}

export default SoftwarePost;