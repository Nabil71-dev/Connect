import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PostCard from '../../../shared-components/posts/PostCard';

const TopPost = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/post/toppost/${id}`)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setError(false)
                setPost(data)
            })
            .catch(() => {
                setLoading(false)
                setError("Something went wrong")
            })
    }, [id])

    return (
        <>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                post.result && post.result.map(data => <PostCard key={data._id} props={data} />)
            }
            {
                !loading && post.message && <h3 className="text-center">No data found</h3>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
        </>
    );
}

export default TopPost;