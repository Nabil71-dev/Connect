import TopicsVacancy from "./job-topic_component/Topic_vacancy";

const demoProps={
    type:'Others',
    header:"Others"
}

function OthersPost() {
    return ( 
        <>
         <TopicsVacancy props={demoProps}/>
        </>
     );
}
export default OthersPost;