//Custom hook to fecth all data
//We must need another custom hook(Context) for profile in v.1.1
import React, {useContext, useEffect, useReducer } from 'react';
export const postContext = React.createContext();
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

export function useApi() {
    return useContext(postContext)
}

export function DataProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initialstate)

    const Postdata=(url)=>{
        useEffect(() => {
            const data=fetch(url,{
                headers:{
                    'authorization':`Bearer ${sessionStorage.getItem('token')}` 
                }
            })
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    dispatch({ type: 'SUCCESS', result: data })
                })
                .catch(() => {
                    dispatch({ type: 'ERROR' })
                })
            return data
        }, [url]);
    }
    return(
        <postContext.Provider value={{state, dispatch,postdata:Postdata }}>
           {children}
        </postContext.Provider>
    )
}