import { Navigate, Outlet } from "react-router-dom";

export default function RouteVerify() {
    // if(currentuser!=='null'){
    //     console.log(currentuser.email)
    // }
    return (sessionStorage.getItem('currentuser') || sessionStorage.getItem('token')) ? (<Outlet />) :
        (<Navigate to="/login" />)
}