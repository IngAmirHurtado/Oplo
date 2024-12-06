import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export const PublicRoutes = () => {
    const {authUser} = useAuthStore();

    return authUser ? <Navigate to="/home" replace/> : <Outlet />;
}