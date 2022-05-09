//Custom hook to fecth all users
import { useEffect, useReducer } from 'react';
const initialstate = {
    loading: true,
    error: '',
    userpost: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                userpost: action.result,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                userpost: {},
                error: 'There is some problem'
            }
        default:
            return state;
    }
}

function useUserpost(currentuserpost) { 
    const [state, dispatch] = useReducer(reducer, initialstate)

    const value={
        email:currentuserpost
    }
    useEffect(() => {
        fetch(`http://localhost:8080/post/userspost`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(response => response.json())
        .then(data => {
                dispatch({ type: 'SUCCESS', result: data })
                //console.log(data)
        })
         .catch(() => {
            dispatch({ type: 'ERROR' })
        })
    },[currentuserpost]);

    return {
        state
    };
}
export default useUserpost;