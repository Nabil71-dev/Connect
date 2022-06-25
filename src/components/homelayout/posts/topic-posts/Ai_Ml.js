import PostCard from "../../../shared-components/posts/PostCard";
import {useApi} from '../../../../custom_hooks/fetchData/useApi';

function AI_ML_POST() {
    const {state,postdata }=useApi()
    postdata(`http://localhost:8080/post/aiml`);
    const{loading,error,data}=state;

    return (   
        <>
        {
            loading && <h3 className="text-center">Loading...</h3>
        }
        {
            data.result && data.result.map(data => <PostCard key={data._id} props={data}/>)
        }
        {
            !loading && data.message && <h3 className="text-center">No data found</h3>
        }
        {
            error && <h3 className="text-center">{error}</h3>
        }
        </>
    );
}

export default AI_ML_POST;