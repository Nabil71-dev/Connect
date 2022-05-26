//Custom hook to fecth all users
import { useEffect, useReducer } from 'react';
const initialstate = {
    loading: true,
    error: '',
    userprofile: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                userprofile: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                userprofile: {},
                error: 'There is some problem'
            }
        default:
            return state;
    }
}

function useProfile(value) {
    const [state, dispatch] = useReducer(reducer, initialstate)
    const data={
        email:value
    }
    useEffect(() => {
        fetch(`http://localhost:8080/user/userprofile/${value}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
                dispatch({ type: 'SUCCESS', result: data })
        })
         .catch(() => {
            dispatch({ type: 'ERROR' })
        })
    }, [value]);

    return {
        state
    };
}
export default useProfile;