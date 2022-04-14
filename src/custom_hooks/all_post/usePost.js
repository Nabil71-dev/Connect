//Custom hook to fecth all posts
import { useEffect, useReducer } from 'react';

const initialstate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There is some problem'
            }
        default:
            return state;
    }
}

function usePost() {
    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        async function fetchpost() {
            const response = await fetch('http://localhost:8080/post');
            const data = await response.json();
            return data;
        }
        try {
            fetchpost().then(data => {
                dispatch({ type: 'SUCCESS', result: data })
                console.log(data)
            });
        }
        catch {
            dispatch({ type: 'ERROR' })
        }
    }, [])
    return {
        state
    };
}
export default usePost;