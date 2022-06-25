import { faHeart } from '@fortawesome/free-regular-svg-icons';
import TrendingPost from "../../../shared-components/trending-post-comp/TrendingPost";
import { useState, useEffect } from 'react';

function ToptrendingPosts() {
    const [toppost, setToppost] = useState({})
    useEffect(() => {
        fetch('http://localhost:8080/post/reactpost',{
            headers:{
                'authorization':`Bearer ${sessionStorage.getItem('token')}` 
            }
        })
            .then(response => response.json())
            .then(data => {
                setToppost(data)
            })
    }, [])

    if (toppost.result) {
        toppost?.result.map((value) => {
                value.quantity = value.react
                value.icon = faHeart
        })
    }

    return (
        <div className="mt-4">
            <h4>Trending Post</h4>
            {
                toppost.result && toppost?.result.map(info => <TrendingPost key={Math.random() * 10} props={info} />)
            }
        </div>
    );
}

export default ToptrendingPosts;