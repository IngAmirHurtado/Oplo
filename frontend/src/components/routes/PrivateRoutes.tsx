import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";


export const PrivateRoutes = () => {
    const {authUser} = useAuthStore();

    return authUser ? <Outlet /> : <Navigate to="/" replace/>;
}
