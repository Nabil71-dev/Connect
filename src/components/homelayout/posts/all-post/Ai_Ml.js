import TopicsVacancy from "./job-topic_component/Topic_vacancy";

const demoProps={
    type:'Ai & Ml',
    header:"Ai & Ml"
}

function AI_ML_POST() {
    return ( 
        <>
          <TopicsVacancy props={demoProps}/>
        </>
    );
}

export default AI_ML_POST;