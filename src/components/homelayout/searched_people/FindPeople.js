import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import JobFootprint from '../../shared-components/users/UserCard'
const FindPeople = () => {
    const { name } = useParams();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/user/search`, {
            method: 'POST',
            headers: {
                'authorization':`Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setError(false)
                setUser(data)
            })
            .catch(() => {
                setLoading(false)
                setError("Something went wrong")
            })

    }, [name])
    return (
        <>
            {
                loading && <h3 className="text-center">Loading...</h3>
            }
            {
                user.data && user.data.map(data => <JobFootprint key={data._id} props={data} />)
            }
            {
                !loading && user.message && <h3 className="text-center">No data found</h3>
            }
            {
                error && <h3 className="text-center">{error}</h3>
            }
        </>
    );
}

export default FindPeople;