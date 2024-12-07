import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";


const PrivateRoutes = () => {
    const {authUser} = useAuthStore();

    console.log(authUser);

    return authUser ? <Outlet /> : <Navigate to="/" replace/>;
}


export default PrivateRoutes