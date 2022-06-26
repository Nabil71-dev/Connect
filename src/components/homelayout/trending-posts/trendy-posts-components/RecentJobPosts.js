import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TrendingPost from "../../../shared-components/trending-post-comp/TrendingPost";
import { useState, useEffect } from 'react';

function RecentJobs() {
    const [recentjob, setRecentjob] = useState({})

    useEffect(() => {
        fetch('http://localhost:8080/post/recentjob',{
            headers:{
                'authorization':`Bearer ${sessionStorage.getItem('token')}` 
            }
        })
            .then(response => response.json())
            .then(data => {
                setRecentjob(data)
            })
    },[])
    if (recentjob.result) {
        recentjob?.result.map((value) => {
            value.icon = faSearch
            value.quantity=value.no_of_vacancy
        })
    }
    
    return (
        <div className="mt-4">
            <h3 className="mb-3">Recent Job</h3>
            {
                recentjob.result && recentjob?.result?.map(info => <TrendingPost key={Math.random() * 10} props={info} />)
            }
        </div>
    );
}

export default RecentJobs;