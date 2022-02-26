import TopicsVacancy from "./job-topic_component/Topic_vacancy";

const demoProps = {
    type: 'Distributed system',
    header:"Distributed system"
}

function DistributedSys() {
    return (
        <>
            <TopicsVacancy props={demoProps} />
        </>
    );
}

export default DistributedSys;