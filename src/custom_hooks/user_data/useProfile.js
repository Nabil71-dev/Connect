//Custom hook to fecth all users
import { useEffect, useReducer } from 'react';
const initialstate = {
    loading: true,
    error: '',
    data: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                data: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                data: {},
                error: 'There is some problem'
            }
        default:
            return state;
    }
}

function useProfile(url) {
    const [state, dispatch] = useReducer(reducer, initialstate)
    useEffect(() => {
        fetch(url, {
            headers: {
                'authorization':`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {
                dispatch({ type: 'SUCCESS', result: data })
        })
         .catch(() => {
            dispatch({ type: 'ERROR' })
        })
    }, [url]);

    return {
        state
    };
}
export default useProfile;