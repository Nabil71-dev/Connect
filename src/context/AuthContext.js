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
    const [currentuser, setCurrentser] = useState();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            setCurrentser(user)
            setLoading(false);
        })
        return unsbscribe;
    }, [])

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
                    setCurrentser(data.user_email);
                    sessionStorage.setItem('token', result.access_token)
                    Navigate("/home", {
                        replace: true
                    })
                }
                else {
                    alert(result.message)
                }
            })
    }

    const login_w_google = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                authDataRedirect();
                setCurrentser(result._tokenResponse.email);
            }).catch((error) => {
                alert(error.message)
            });
    }

    const authDataRedirect = () => {
        fetch(`http://localhost:8080/email/gmaillogin`)
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Authentication successfull') {
                    sessionStorage.setItem('token', data.access_token)
                    Navigate("/home", {
                        replace: true
                    })
                }
                else{
                    alert(data.message)
                }

            })
    }

    const logOut = () => {
        sessionStorage.clear();
        Navigate("/", {
            replace: true
        })
    }

    const value = {
        currentuser,
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