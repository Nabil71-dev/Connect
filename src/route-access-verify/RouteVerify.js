import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RouteVerify() {
    const { currentuser } = useAuth();
    return (currentuser.email && sessionStorage.getItem('token')) ? (<Outlet />) :
        (<Navigate to="/login" />)
}