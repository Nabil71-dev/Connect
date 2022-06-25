import { Navigate, Outlet } from "react-router-dom";
export default function RouteVerify() {
    return (sessionStorage.getItem('currentuser') && sessionStorage.getItem('token')) ? (<Outlet />) :
        (<Navigate to="/login" />)
}