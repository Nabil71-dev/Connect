//Custom hook to fecth all users
import { useEffect, useReducer } from 'react';
const initialstate = {
    loading: true,
    error: '',
    user: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                user: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                user: {},
                error: 'There is some problem'
            }
        default:
            return state;
    }
}

function useUser(job_title) { 
    const [state, dispatch] = useReducer(reducer, initialstate)

    useEffect(() => {
        fetch(`http://localhost:8080/user/${job_title}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SUCCESS', result: data })
            })
            .catch(() => {
                dispatch({ type: 'ERROR' })
            })
    },[job_title]);

    return {
        state
    };
}
export default useUser;