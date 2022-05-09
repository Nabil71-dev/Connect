import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import '../firebase/firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const Navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    //const [currentuser, setCurrentuser] = useState();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            //setCurrentuser(user)
            setLoading(false);
        })
        return unsbscribe;
    }, [])

    const authDataRedirect = (result) => {
        fetch(`http://localhost:8080/email/gmaillogin`)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Authentication successfull') {
                    sessionStorage.setItem('token', data.access_token)
                    sessionStorage.setItem('currentuser', result._tokenResponse.email)
                    Navigate("/home", {
                        replace: true
                    })
                }
                else{
                    alert(data.message)
                }

            })
    }

    const reg_w_email = (data) => {
        fetch(`http://localhost:8080/email/reg`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
           
            if(response.message==='User created successfully'){
                alert("User created successfully , Now you can login")
            }
            else{
                alert(response.message)
            }
        })
    }

    const login_w_email = (data) => {
        fetch(`http://localhost:8080/email/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.message === 'Authentication successfull') {
                    sessionStorage.setItem('token', result.access_token)
                    sessionStorage.setItem('currentuser',data.user_email)
                    Navigate("/home", {
                        replace: true
                    })
                    //setCurrentuser(data.user_email);
                }
                else {
                    alert(result.message)
                }
            })
    }

    const login_w_google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                authDataRedirect(result);
                //console.log(result)
                //setCurrentuser(result._tokenResponse.email);
            }).catch((error) => {
                alert(error.message)
            });
    }

    

    const logOut = () => {
        sessionStorage.clear();
        Navigate("/", {
            replace: true
        })
    }

    const value = {
        //currentuser,
        login_w_google,
        reg_w_email,
        login_w_email,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}