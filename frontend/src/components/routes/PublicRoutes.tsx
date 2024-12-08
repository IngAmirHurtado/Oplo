import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const PublicRoutes = () => {
    const {authUser} = useAuthStore();

    return authUser ? <Navigate to="/messages" replace/> : <Outlet />;
}

export default PublicRoutes